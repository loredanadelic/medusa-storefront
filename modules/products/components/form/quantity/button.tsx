type ButtonProps = {
  action: string;
  type: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, action }) => {
  return (
    <button
      type="button"
      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 text-2xl"
      onClick={() => {
        type();
      }}
    >
      {action}
    </button>
  );
};

export default Button;
