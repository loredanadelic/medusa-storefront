import { Dispatch, ReactNode, SetStateAction } from "react";

type FilterSidebarProps = {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  sidebar: boolean
};
const FilterSidebar: React.FC<FilterSidebarProps> = ({ setSidebar, children, sidebar }) => {
    const active=()=>{
       if(sidebar){
        return {display:''}
       }
       else{
        return {display:'none'}
       }
    }
  return (
    <div className="h-screen w-[25%] fixed z-10 bg-white border-2 border-gray-400 right-0 top-0" style={active()}>
        <div className="flex justify-end p-2">
      <svg
        className="filters-panel__button-close-icon hover:cursor-pointer "
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        stroke="inherit"
        onClick={() => setSidebar((prev) => !prev)}
      >
        <path d="M12 12.707l6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707z"></path>
      </svg></div>
      <div className="m-[2%] mt-[10%]">{children}</div>
    </div>
  );
};

export default FilterSidebar;
