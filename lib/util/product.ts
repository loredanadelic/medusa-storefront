import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
export const getPrice=(product: PricedProduct)=>{
    const index = product.variants[0].prices[0].currency_code === "eur" ? 0 : 1;
  const price = product.variants[0].prices[index].amount;
  const currency = product.variants[0].prices[index].currency_code;
  return {price, currency}
}