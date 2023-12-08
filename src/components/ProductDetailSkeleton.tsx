import ButtonAddCart from "./ButtonAddCart";
import StarRating from "./StarRating";

export default function ProductDetailSkeleton() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-20 animate-pulse">
        <div className="w-96 lg:w-[420px] bg-gray-300 flex items-center justify-center"></div>
        <div>
          <div className="flex flex-col gap-1">
            <div className="w-96 h-8 bg-gray-300"></div>
            <div className="w-44 h-6 bg-gray-200"></div>

            <StarRating rate={5} />
          </div>
          <div className="mt-2 text-4xl font-bold w-32 h-8 bg-gray-300 rounded"></div>
          <div className="flex flex-col gap-1 mt-10">
            <span className="text-gray-600 text-sm font-bold">Description</span>
            <div className="flex flex-col gap-2">
              <div className="w-96 h-6 bg-gray-200 rounded"></div>
              <div className="w-96 h-6 bg-gray-200 rounded"></div>
              <div className="w-96 h-6 bg-gray-200 rounded"></div>
              <div className="w-44 h-6 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <ButtonAddCart />
          </div>
        </div>
      </div>
    </>
  );
}
