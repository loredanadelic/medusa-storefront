import { Dispatch, SetStateAction } from "react";

export type FilterList = {
  collection_id: string[];
};

export type CloseProps = {
  close: Dispatch<SetStateAction<boolean>>;
};
