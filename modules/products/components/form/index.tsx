import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Select from "./select";
import QuantitySelector from "./quantity";
import { useState } from "react";
type FormProps = {
  product: PricedProduct;
};

const Form: React.FC<FormProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [color, setColor]=useState<string>('')
  const [size, setSize]=useState<string>('')
  const options = product.options || [];
  const sizes = options.values().next().value.values;
  const colors = options[1]?.values || [{ value: "One color" }];

  return (
    <div>
      <form>
        <div className="grid  grid-cols-1 w-[100%]">
          <Select values={sizes} />
          <Select values={colors} />
        </div>
        <QuantitySelector value={quantity} setValue={setQuantity} />
        <button type="submit" className="w-[100%] bg-slate-900 mt-5 h-10 text-white text-lg">ADD TO CART <span className="text-xl ml-2">+</span></button>
      </form>
    </div>
  );
};

export default Form;
