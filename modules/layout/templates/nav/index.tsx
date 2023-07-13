import DropdownIcon from "../../components/dropdown/icon";
import Medusa from "../../components/medusa";
import Cart from "../../components/cart";

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <DropdownIcon />
        </div>
        <div className="absolute top-0 w-[100%] h-auto m-auto pt-3">
          <Medusa />
        </div>
        <div className="absolute top-0 right-1 w-[100%] h-auto  pt-3">
          <Cart />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
