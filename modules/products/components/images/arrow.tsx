
type ArrowProps={
    handleClick:(type:string)=>void
    type: string
}

const Arrow : React.FC<ArrowProps>= ({handleClick, type}) => {
  return (
    <img
    src="/next.png"
    className="opacity-70 h-10 m-auto cursor-pointer"
    onClick={() => handleClick(type)}
  />
  );
};


export default Arrow
