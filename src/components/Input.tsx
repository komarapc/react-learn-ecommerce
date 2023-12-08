export default function Input({
  className = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        {...rest}
        className={`w-full px-6 py-2 border border-emerald-600 rounded-lg outline-none focus:outline-none read-only:bg-gray-200 disabled:opacity-50 ${className}`}
      />
    </>
  );
}
