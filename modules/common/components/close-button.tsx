import { CloseProps } from "@/types"

const CloseButton: React.FC<CloseProps>=({close})=>{
    return <div className="flex justify-end p-2">
    <svg
      className="filters-panel__button-close-icon hover:cursor-pointer "
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="inherit"
      stroke="inherit"
      onClick={() => close((prev) => !prev)}
    >
      <path d="M12 12.707l6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707z"></path>
    </svg></div>
}

export default CloseButton