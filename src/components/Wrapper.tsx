type ComponentProps = {
  children?: React.ReactNode;
};
export default function Wrapper({ children }: ComponentProps) {
  return (
    <>
      <div className="w-full min-h-screen bg-white font-inter">{children}</div>
    </>
  );
}
