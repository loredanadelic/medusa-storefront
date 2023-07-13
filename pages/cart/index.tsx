import CartItem from "@/modules/cart/components/cart-item";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="w-[100%] m-auto">
      <h1 className="text-xl">Cart ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
          <CartItem item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
