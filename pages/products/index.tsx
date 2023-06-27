import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useEffect, useState } from "react";
import { medusaClient } from "@/lib/config";
import Product from "@/modules/products/components/product";

const ProductsPage = () => {
  const [productList, setProductList] = useState<PricedProduct[]>([]);
  const fetchProduct = async () => {
    return await medusaClient.products.list().then(({ products }) => {
      console.log(products);
      setProductList(products);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 bg-white">
      <ul className="grid gap-3 grid-cols-4">
        {productList.map((product: PricedProduct) => {
          return <Product product={product} key={product.id} />;
        })}
      </ul>
    </div>
  );
};

export default ProductsPage;
