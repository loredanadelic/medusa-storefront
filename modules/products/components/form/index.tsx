import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing";
import Select from "./select";
import QuantitySelector from "./quantity";
import { useEffect, useState } from "react";
import { FormatedValue, Option } from "@/types";
import { useCart } from "react-use-cart";
import { getPrice } from "@/lib/util/product";
import {Item} from '../../../../types'
type FormProps = {
  product: PricedProduct;
};
type ProductVariant = {
  id: string;
};

const Form: React.FC<FormProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [color, setColor] = useState<FormatedValue>();
  const [size, setSize] = useState<FormatedValue>();
  const [variantId, setVariantId] = useState<ProductVariant>();
  const [prodVariant, setProdVariant] = useState<PricedVariant>();
  const { addItem } = useCart();
  const options = product.options || [];
  const sizes = options.values().next().value.values;
  const colors = options[1]?.values || [{ value: "One color" }];

  useEffect(() => {
    if (variantId) {
      const index = product.variants.findIndex((prod) => {
        return prod.id === variantId.id;
      });
      setProdVariant(product.variants[index]);
    } else {
      setProdVariant(undefined);
      setVariantId(undefined);
    }
    sizes[0].value == "One Size" &&
      setSize(() => ({
        x: "One Size",
        variant_ids: sizes[0].variant_id,
        visability: true,
      }));
    if (colors[0].value === "One color") {
      const col: string[] = [];
      sizes.forEach((s: Option) => col.push(s.variant_id));
      setColor(() => ({ x: "One color", variant_ids: col, visability: true }));
    }
    if (colors[0].value === "One color" && sizes[0].value === "One Size") {
      const index = product.variants.findIndex((prod) => {
        return prod.id === sizes[0].variant_id;
      });
      setProdVariant(() => {
        return product.variants[index];
      });
    }
  }, [variantId?.id, color?.x, size?.x]);

  const handleAdd = (e: any) => {
    e.preventDefault();
    if (prodVariant && quantity > 0) {
      const newItem: Item = {
        id: prodVariant.id || "",
        price: getPrice(product).price,
        image: product.thumbnail,
        name: product.title || "Product",
        variant: prodVariant.title,
      };
    
      addItem(newItem, quantity);
      window.alert('Item added to cart')
      setQuantity(0);
    }
    else{
      window.alert('You need to select required values')
    }

  };
  return (
    <div>
      <form>
        <div className="grid  grid-cols-1 w-[100%]">
          {sizes[0].value !== "One Size" && (
            <Select
              values={sizes}
              pickValue={setSize}
              pickedValue={color}
              setVariantId={setVariantId}
              setQuantity={setQuantity}
            />
          )}
          {colors[0].value !== "One color" && (
            <Select
              values={colors}
              pickValue={setColor}
              pickedValue={size}
              setVariantId={setVariantId}
              setQuantity={setQuantity}
            />
          )}
        </div>
        <QuantitySelector
          value={quantity}
          setValue={setQuantity}
          prodVariant={prodVariant}
        />
        <button
          type="submit"
          onClick={(e) => {
            handleAdd(e);
          }}
          className="w-[100%] bg-slate-900 mt-5 h-10 text-white text-lg"
        >
          ADD TO CART <span className="text-xl ml-2">+</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
