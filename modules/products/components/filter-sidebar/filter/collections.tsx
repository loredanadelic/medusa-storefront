import { FilterList } from "@/types";
import { ProductCollection } from "@medusajs/medusa/dist/models/product-collection";
import { Dispatch, SetStateAction } from "react";
type CollectionsProps = {
  collections: ProductCollection[];
  setFilter: Dispatch<SetStateAction<FilterList>>;
  filter: FilterList;
};

const Collections: React.FC<CollectionsProps> = ({
  collections,
  filter,
  setFilter,
}) => {
  const checked = (value: string) => {
    if (filter.collection_id.includes(value)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="grid  grid-cols-2 p-7">
      {collections.map((collection: ProductCollection) => {
        return (
          <div key={collection.id}>
            <input
              type="checkbox"
              id={collection.id}
              className="mr-2 bg-black  border-none border-radius-none color-inherit cursor-pointer hidden peer"
              value={collection.id}
              checked={checked(collection.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter((prev) => {
                    return {
                      ...prev,
                      collection_id: [...prev.collection_id, e.target.value],
                    };
                  });
                } else {
                  setFilter((prev) => {
                    return {
                      ...prev,
                      collection_id: prev.collection_id.filter(
                        (x) => x !== e.target.value
                      ),
                    };
                  });
                }
              }}
            />
            <label
              className="p-5 peer-checked:font-bold cursor-pointer"
              htmlFor={collection.id}
            >
              <span>{collection.title}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;
