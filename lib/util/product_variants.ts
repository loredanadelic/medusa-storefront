import { FormatedValue, Option } from "@/types";

export const addVariantId = (value: Option, visability: boolean) => {
  return {
    x: value.value,
    variant_ids: [value.variant_id],
    visability: visability,
  };
};

export const getOptions = (
  formatedValues: FormatedValue[],
  values: Option[],
  pickedValue: FormatedValue | undefined
) => {
  values.forEach((value) => {
    let exist = false;
    formatedValues.map((f: FormatedValue) => {
      if (f.x === value.value) {
        f.variant_ids.push(value.variant_id);
        if (pickedValue !== undefined) {
          if (pickedValue.variant_ids.includes(value.variant_id)) {
            f.visability = true;
          }
        }
        exist = true;
      }
    });
    if (!exist) {
      if (pickedValue !== undefined) {
        if (pickedValue.variant_ids.includes(value.variant_id)) {
          formatedValues.push(addVariantId(value, true));
        } else {
          formatedValues.push(addVariantId(value, false));
        }
      } else {
        formatedValues.push(addVariantId(value, true));
      }
    }
  });
};
