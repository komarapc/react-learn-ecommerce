interface Props extends React.HTMLAttributes<HTMLDivElement> {}
export default function Card({ className = "", children, ...rest }: Props) {
  return (
    <>
      <div
        {...rest}
        className={`w-full bg-white border border-gray-300 rounded-xl shadow-lg ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export function CardHeader({ className = "", children, ...rest }: Props) {
  return (
    <>
      <div
        {...rest}
        className={`p-5 flex items-center border-b border-gray-300 ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export function CardBody({ className = "", children, ...rest }: Props) {
  return (
    <>
      <div {...rest} className={`p-5 flex flex-col gap-4 ${className}`}>
        {children}
      </div>
    </>
  );
}
