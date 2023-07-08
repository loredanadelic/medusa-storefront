type ButtonProps = {
  type: string;
  action: () => void;
  active: () => boolean | undefined;
};

const Button: React.FC<ButtonProps> = ({ type, action, active }) => {
  return (
    <button
      type="button"
      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 text-2xl"
      disabled={active()}
      onClick={() => {
        action();
      }}
    >
      {type}
    </button>
  );
};

export default Button;
