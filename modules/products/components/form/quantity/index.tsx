import { Dispatch, SetStateAction } from "react";
import Button from "./button";

type SelectorProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

const QuantitySelector: React.FC<SelectorProps> = ({ value, setValue }) => {
  const add = () => {
    setValue((prev) => prev + 1);
  };
  const remove = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <div className=" flex justify-between items-center border  border-slate-300 mt-5">
      <Button type={remove} action={"-"} />
      <input
        type="number"
        id="Quantity"
        value={value}
        className=" outline-0 h-10 w-16 border-transparent text-center  sm:text-sm  [-moz-appearance:_textfield]  [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0   [&::-webkit-inner-spin-button]:appearance-none"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Button type={add} action={"+"} />
    </div>
  );
};

export default QuantitySelector;
