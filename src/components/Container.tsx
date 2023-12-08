export default function Container({
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        {...rest}
        className={`container mx-auto h-full max-w-6xl p-5 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
