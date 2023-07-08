import { Dispatch, SetStateAction } from "react";
import Button from "./button";
import { PricedVariant } from "@medusajs/medusa/dist/types/pricing";

type SelectorProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  prodVariant: PricedVariant | undefined;
};

const QuantitySelector: React.FC<SelectorProps> = ({
  value,
  setValue,
  prodVariant,
}) => {
  const check = () => {
    return (
      prodVariant &&
      prodVariant.inventory_quantity &&
      prodVariant.inventory_quantity > value
    );
  };
  const add = () => {
    check() && setValue((prev) => prev + 1);
  };
  const remove = () => {
    value > 0 && check() && setValue((prev) => prev - 1);
  };
  const active = () => {
    return prodVariant ? false : true;
  };

  return (
    <div className=" flex justify-between items-center border  border-slate-300 mt-5">
      <Button action={remove} type={"-"} active={active} />
      <input
        type="number"
        id="Quantity"
        value={value}
        className=" outline-0 h-10 w-16 border-transparent text-center  sm:text-sm  [-moz-appearance:_textfield]  [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0   [&::-webkit-inner-spin-button]:appearance-none"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Button action={add} type={"+"} active={active} />
    </div>
  );
};

export default QuantitySelector;
