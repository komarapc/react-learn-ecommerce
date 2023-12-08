import { BsCart3 } from "react-icons/bs";

export default function ButtonAddCart({
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <button
        {...rest}
        className={`bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-1 hover:bg-blue-600 transition duration-200 ease-in-out ${className}`}
      >
        <BsCart3 size={20} />
        Add to cart
      </button>
    </>
  );
}
