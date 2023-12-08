import { BsCartCheckFill } from "react-icons/bs";

export default function ButtonBuyNow({
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <button
        {...rest}
        className={`flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-emerald-100 py-2 px-4 rounded transition duration-200 ease-in-out ${className}`}
        type="button"
      >
        <BsCartCheckFill size={20} />
        Buy Now
      </button>
    </>
  );
}
