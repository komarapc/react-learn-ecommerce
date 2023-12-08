import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";
import { ProductProps } from "@/interface/product";
import StarRating from "./StarRating";
import { addToCart } from "@/redux/reducer/cartReducer";
import { formatCurrency } from "@/utils/formatCurrency";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }: { product: ProductProps }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full bg-white border shadow-md rounded-lg p-5">
        <img
          src={product.image}
          alt={`img-${product.title}`}
          className="w-full aspect-video object-cover"
        />
        <div className="text-lg font-medium h-14 overflow-hidden mt-4">
          <Link to={`/product/${product.id}`} className="hover:underline">
            {product.title}
          </Link>
        </div>

        <StarRating rate={product.rating.rate} />
        <div className="mt-4 flex items-center justify-between">
          <span>{formatCurrency(product.price)}</span>
          <ButtonAddCart
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          />
        </div>
      </div>
    </>
  );
}
