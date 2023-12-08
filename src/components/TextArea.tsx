export default function TextArea({
  className = "",
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <>
      <textarea
        {...rest}
        className={`px-4 py-2 rounded-md border border-emerald-600 focus:outline-none read-only:bg-gray-50 disabled:opacity-50 disabled:cursor-pointer ${className}`}
      ></textarea>
    </>
  );
}
