import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Thumbnail from "../thumbnail";
import { getPrice } from "@/lib/util/product";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
type ProductProps = {
  product: PricedProduct;
};
const Product: React.FC<ProductProps> = ({ product }) => {
  const { price, currency } = getPrice(product);
 
  return (
    <Link href={`/products/${product.id}`}>
      <li className="h-auto w-auto relative hover:cursor-pointer">
        <Thumbnail thumbnail={product.thumbnail || ""} />
        <div className="flex justify-between absolute bottom-0 px-4 py-3 w-full ">
          <p className="m-0.5 text-lg">{product.title}</p>
          <p className="m-0.5 text-lg">
            {price} {currency.toUpperCase()}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default Product;
