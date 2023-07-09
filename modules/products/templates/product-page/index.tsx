import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Form from "../../components/form";
import { getPrice } from "@/lib/util/product";
import { useState } from "react";
import Arrow from "../../components/images/arrow";

type ProductDetailsTemplateProps = {
  product: PricedProduct;
};

const ProductDetailsTemplate: React.FC<ProductDetailsTemplateProps> = ({
  product,
}) => {
  const { price, currency } = getPrice(product);
  const [image, setImage] = useState<number>(0);
  const handleClick = (type: string) => {
    if (type === "next") {
      setImage((prev) => {
        if (product.images) {
          if (prev === 0) {
            return product.images.length - 1;
          } else {
            return prev - 1;
          }
        } else {
          return 0;
        }
      });
    } else {
      setImage((prev) => {
        if (product.images) {
          if (prev === product.images.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        } else {
          return 0;
        }
      });
    }
  };
  return (
    <div className="grid grid-cols-2 w-[100%]">
      <div>
        <div className="max-h-[40rem] w-[100%] flex">
          {product.images && product.images.length > 1 && (
            <div className="flex justify-between align-middle apsolute bottom-[50%] left-[0%] w-10 rotate-180">
              <Arrow handleClick={handleClick} type="previous" />
            </div>
          )}
          <div className="max-h-[40rem] w-[100%] ">
            <img
              src={
                (product.images && product.images[image].url) ||
                product.thumbnail ||
                ""
              }
              className=" w-[100%] max-h-[40rem] object-contain"
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="flex justify-between align-middle apsolute bottom-[50%] right-[50%] w-10">
              <Arrow handleClick={handleClick} type="next" />
            </div>
          )}
        </div>
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
