import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useEffect, useState } from "react";
import { medusaClient } from "@/lib/config";
import Product from "@/modules/products/components/product";

const ProductsPage = () => {
  const [productList, setProductList] = useState<PricedProduct[]>([]);
  const fetchProduct = async () => {
    return await medusaClient.products.list().then(({ products }) => {
      setProductList(products);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
      <ul className="grid gap-3 grid-cols-4">
        {productList.map((product: PricedProduct) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
  );
};

export default ProductsPage;
