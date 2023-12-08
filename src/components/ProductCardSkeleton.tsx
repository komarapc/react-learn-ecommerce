import ButtonAddCart from "./ButtonAddCart";
import StarRating from "./StarRating";

export default function ProductCardSkeleton() {
  return (
    <>
      <div className="w-full bg-white border shadow-md rounded-lg p-5 animate-pulse">
        <div className="w-full aspect-video bg-gray-300 object-cover"></div>
        <div className="text-lg font-medium h-14 overflow-hidden mt-4 flex flex-col gap-2">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
        </div>

        <StarRating rate={4} />
        <div className="mt-4 flex items-center justify-between">
          <div className="w-14 h-8 bg-gray-200 rounded"></div>
          <ButtonAddCart />
        </div>
      </div>
    </>
  );
}
