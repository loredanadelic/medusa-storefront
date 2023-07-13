import Link from "next/link";
import { useCart } from "react-use-cart";

const Cart=()=>{
    const { totalUniqueItems } = useCart();
    return (
        <div className=" w-[100%] flex justify-end">
            <div className="w-7 mr-1 mt-3 ">
            <Link href='/cart'><img src='/shopping-cart.png' className="w-[100%] object-contain"></img></Link></div>
            {totalUniqueItems>0 && <p className="mt-3">{totalUniqueItems}</p>}
        </div>
      );
}

export default Cart