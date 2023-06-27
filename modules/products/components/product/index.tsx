import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Thumbnail from "../thumbnail";
type ProductProps = {
  product: PricedProduct;
};
const Product: React.FC<ProductProps> = ({ product }) => {
  const index = product.variants[0].prices[0].currency_code === "eur" ? 0 : 1;
  const price = product.variants[0].prices[index].amount;
  const currency = product.variants[0].prices[index].currency_code;
  return (
    <li className="h-auto w-auto relative hover:bg-sky-700 hover:cursor-pointer">
      <Thumbnail thumbnail={product.thumbnail || ""} />
      <div className="flex justify-between absolute bottom-0 px-4 py-3 w-full ">
        <p className="m-0.5 text-lg">{product.title}</p>
        <p className="m-0.5 text-lg">
          {price} {currency.toUpperCase()}
        </p>
      </div>
    </li>
  );
};

export default Product;
