interface ProductOptionValue {
  value: String;
}
type ProductOptionValues = {
  values: ProductOptionValue[];
};

const Select: React.FC<ProductOptionValues> = ({ values }) => {
  const formatedValues: String[] = [];
  values.forEach((value) => {
    if (!formatedValues.includes(value.value)) {
      formatedValues.push(value.value);
    }
  });
  return (
    <select
      name=""
      id=""
      className="h-10 mt-5 border-slate-300 border-[1px] p-2.5 "
    >
      {formatedValues.map((value: any, i: number) => {
        return <option key={i}>{value}</option>;
      })}
    </select>
  );
};

export default Select;
