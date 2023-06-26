import Link from "next/link";
import DropdownIcon from "../../components/dropdown/icon";
import Medusa from "../../components/medusa";

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
      </nav>
    </header>
  );
};

export default Nav;
