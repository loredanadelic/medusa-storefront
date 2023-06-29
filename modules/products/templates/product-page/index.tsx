import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Form from "../../components/form";
import { getPrice } from "@/lib/util/product";

type ProductDetailsTemplateProps = {
  product: PricedProduct;
};

const ProductDetailsTemplate: React.FC<ProductDetailsTemplateProps> = ({
  product,
}) => {
  const { price, currency } = getPrice(product);
  return (
    <div className="grid grid-cols-2 w-[100%]">
      <div className="max-h-[40rem] w-[100%] ">
        <img
          src={product.thumbnail || ""}
          className=" w-[100%] max-h-[40rem] object-contain"
        />
      </div>
      <div className="max-h-[40rem] max-w-[40rem] m-auto pl-10 pr-10 ">
        <h1 className="text-3xl font-semibold pb-4">{product.title}</h1>
        <p className="pb-8">
          {price} {currency.toUpperCase()}
        </p>
        <p>{product.description}</p>
        <Form product={product} />
        <h3 className="mt-5 font-medium">Product details</h3>
        <h5 className="mt-5 font-medium">Materials</h5>
        <p className="mt-2">{product.material || "No information"}</p>
      </div>
    </div>
  );
};

export default ProductDetailsTemplate;
