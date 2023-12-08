export default function TextError({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="text-sm text-red-500">{children}</span>
    </>
  );
}
