import { getOptions } from "@/lib/util/product_variants";
import { FormatedValue, Option } from "@/types";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
type ProductVariant = {
  id: string;
};
type ProductOptionValues = {
  values: Option[];
  pickValue: Dispatch<SetStateAction<FormatedValue | undefined>>;
  pickedValue: FormatedValue | undefined;
  setVariantId: Dispatch<SetStateAction<ProductVariant | undefined>>;
  setQuantity: Dispatch<SetStateAction<number>>;
};

const Select: React.FC<ProductOptionValues> = ({
  values,
  pickValue,
  pickedValue,
  setVariantId,
  setQuantity,
}) => {
  const [index, setIndex] = useState<number | string>();
  const formatedValues: FormatedValue[] = [];
  getOptions(formatedValues, values, pickedValue);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(() => 0);
    setIndex(() => e.target.value);
    pickValue(() => formatedValues[Number(e.target.value)]);
    if (pickedValue !== undefined) {
      pickedValue.variant_ids.forEach((id) => {
        formatedValues[Number(e.target.value)].variant_ids.forEach((prodId) => {
          if (id === prodId) {
            setVariantId(() => {
              return { id: id };
            });
            return;
          }
        });
      });
    }
  };

  return (
    <select
      name=""
      id=""
      className="h-10 mt-5 border-slate-300 border-[1px] p-2.5 "
      value={index}
      onChange={(e) => handleChange(e)}
    >
      <option value={undefined} selected disabled>
        Select
      </option>
      {formatedValues.map((value: FormatedValue, i: number) => {
        if (value.visability === true) {
          return (
            <option key={i} value={i}>
              {value.x}
            </option>
          );
        } else {
          return (
            <option disabled key={i} value={i} className="flex justify-between">
              {value.x}-not available
            </option>
          );
        }
      })}
    </select>
  );
};

export default Select;
