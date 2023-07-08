import { Dispatch, SetStateAction } from "react";

export type FilterList = {
  collection_id: string[];
};

export type CloseProps = {
  close: Dispatch<SetStateAction<boolean>>;
};

export type FormatedValue = {
    x: string;
    variant_ids: string[];
    visability: boolean;
  };


  export type Option = {
    id: string;
    value: string;
    option_id: string;
    variant_id: string;
  };