export default function ErrorBoundary() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-slate-200">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Something went wrong
          </h1>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    </>
  );
}
