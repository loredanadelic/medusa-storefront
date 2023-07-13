import { Item, useCart } from "react-use-cart";

const CartItem: React.FC<{
  item: Item;
}> = ({ item }) => {
  const { updateItemQuantity, removeItem } = useCart();
  return (
    <li className="flex  ml-[1%]">
      <div className=" w-[50%] max-w-[30rem] mb-5">
        <img src={item.image} className="w-[100%]" />
      </div>
      <div className="w-max-[100%] m-auto ml-2">
        <p className="text-xl mb-5">{item.name}</p>
        <p>{item.variant}</p>
        <div className="grid gap-6 grid-cols-4">
          <button
            onClick={() =>
              item.quantity && updateItemQuantity(item.id, item.quantity - 1)
            }
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() =>
              item.quantity && updateItemQuantity(item.id, item.quantity + 1)
            }
          >
            +
          </button>
        </div>
        <p>Price: {item.price * (item.quantity ? item.quantity : 1)}</p>
      </div>
    </li>
  );
};

export default CartItem;
