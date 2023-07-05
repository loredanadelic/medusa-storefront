import CloseButton from "@/modules/common/components/close-button";
import { Dispatch, SetStateAction, useState } from "react";
import { ProductCollection } from "@medusajs/medusa/dist/models/product-collection";
import Collections from "./filter/collections";
import { FilterList } from "@/types";

type FilterSidebarProps = {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  sidebar: boolean;
  collections: ProductCollection[];
  filterProducts: (values: FilterList) => void;
};
const FilterSidebar: React.FC<FilterSidebarProps> = ({
  setSidebar,
  sidebar,
  collections,
  filterProducts,
}) => {
  const [filter, setFilter] = useState<FilterList>({ collection_id: [] });
  const active = () => {
    if (sidebar) {
      return { display: "" };
    } else {
      return { display: "none" };
    }
  };
  return (
    <div
      className="h-screen w-[25%] fixed z-10 bg-white border-2 border-gray-400 right-0 top-0"
      style={active()}
    >
      <CloseButton close={setSidebar} />
      <div className="m-[2%] mt-[10%]">
        <form>
          <div className="w-[100%] h-[100%] text-center">
            <h1 className="font-semibold text-lg m-auto">Collection</h1>
            <Collections
              collections={collections}
              setFilter={setFilter}
              filter={filter}
            />
            <div className="w-[100%] m-auto">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  filterProducts(filter);
                }}
                className="border-2 px-2 py-1 font-medium m-auto"
              >
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterSidebar;
