import { FaStar } from "react-icons/fa6";

export default function StarRating({ rate }: { rate: number }) {
  const renderStars = () => {
    const roundedRate = Math.round(rate); // Round the rate to the nearest whole number
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < roundedRate ? "text-yellow-500" : "text-gray-300"} // Highlight stars based on the rate
        />
      );
    }

    return stars;
  };

  return (
    <div>
      <div className="flex items-center gap-2 h-full">
        <span className="text-md font-bold">{rate}</span>
        {renderStars()}
      </div>
    </div>
  );
}
