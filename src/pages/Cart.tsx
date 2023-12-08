import { Link, useNavigate } from "react-router-dom";
import {
  clearCart,
  increaseQuantity,
  reduceQuantity,
  updateQuantity,
} from "@/redux/reducer/cartReducer";
import { removeFromCart, useSelectCart } from "@/redux/reducer/cartReducer";
import { useDispatch, useSelector } from "react-redux";

import ButtonRemove from "@/components/ButtonRemove";
import Container from "@/components/Container";
import { FaCheck } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import Input from "@/components/Input";
import NavBar from "@/components/NavBar";
import StarRating from "@/components/StarRating";
import Wrapper from "@/components/Wrapper";
import { formatCurrency } from "@/utils/formatCurrency";

export default function Cart() {
  const carts = useSelector(useSelectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangeQty = (index: number, value: number) => {
    dispatch(updateQuantity({ index, quantity: value }));
  };

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Wrapper>
        <NavBar />
        <Container>
          {carts.length > 0 ? (
            <>
              <div className="flex flex-col gap-20 my-10">
                {carts.map((cart, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-10"
                  >
                    <div className="w-full aspect-square">
                      <img src={cart.image} alt={`image-${cart.title}`} />
                    </div>
                    <div className="col-span-2 w-full">
                      <div className="flex flex-col">
                        <Link
                          to={`/product/${cart.id}`}
                          className="hover:underline"
                        >
                          <h1 className="text-2xl font-bold">{cart.title}</h1>
                        </Link>
                        <span>{cart.category}</span>
                      </div>
                      <div>
                        <StarRating rate={cart.rating.rate} />
                        <h1 className="text-2xl font-bold">
                          {formatCurrency(cart.price)}
                        </h1>
                      </div>
                      <div className="mt-10 flex flex-col gap-1">
                        <span className="text-gray-600 text-sm font-bold">
                          Description
                        </span>
                        <p>
                          {cart.description.substring(0, 200) ||
                            "No description for this product"}
                        </p>
                      </div>
                      <div>
                        <div className="mt-4 flex items-center gap-2">
                          <ButtonRemove
                            onClick={() => dispatch(removeFromCart({ index }))}
                          >
                            Remove
                          </ButtonRemove>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="w-full flex flex-col gap-4 border border-gray-300 p-2 rounded-lg">
                          <span className="text-2xl font-bold">
                            {formatCurrency(cart.price * cart.quantity)}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              className="w-10 h-10 p-2 bg-blue-500 text-blue-50 text-2xl rounded aspect-square flex items-center justify-center"
                              onClick={() =>
                                dispatch(reduceQuantity({ index }))
                              }
                            >
                              -
                            </button>
                            <Input
                              type="number"
                              value={cart.quantity}
                              onChange={(e) =>
                                handleChangeQty(index, Number(e.target.value))
                              }
                              min={1}
                            />
                            <button
                              className="w-10 h-10 p-2 bg-blue-500 text-blue-50 text-2xl rounded aspect-square flex items-center justify-center"
                              onClick={() =>
                                dispatch(increaseQuantity({ index }))
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-lg font-bold">Cart is empty</h1>
            </div>
          )}
        </Container>
        <div className="my-56"></div>
        {carts.length ? (
          <>
            <div className={`w-full fixed bottom-5`}>
              <div className="container max-w-lg mx-auto mb-10 bg-white/20 text-black backdrop-blur-lg rounded-xl border shadow-2xl p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaCheck size={20} />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Subtotal:</span>
                    <span className="text-lg font-bold">
                      {formatCurrency(
                        carts.reduce(
                          (acc, curr) => acc + curr.price * curr.quantity,
                          0
                        )
                      )}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <ButtonRemove onClick={() => dispatch(clearCart())}>
                    Remove All
                  </ButtonRemove>
                  <button
                    className="bg-emerald-600 text-emerald-50 px-10 py-2 rounded-lg"
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Wrapper>
    </>
  );
}
