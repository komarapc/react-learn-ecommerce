import { FaTrashCan } from "react-icons/fa6";

export default function ButtonRemove({
  className = "",
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`bg-red-100 text-red-600 p-2 rounded-lg flex items-center gap-2 ${className}`}
    >
      <FaTrashCan size={20} />
      <span>{children}</span>
    </button>
  );
}
