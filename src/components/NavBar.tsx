import BrandLogo from "./BrandLogo";
import Container from "./Container";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelectCart } from "@/redux/reducer/cartReducer";
import { useSelector } from "react-redux";

export default function NavBar() {
  const carts = useSelector(useSelectCart);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-20 bg-white shadow">
        <Container className="flex items-center justify-between">
          <BrandLogo />
          <div>
            <div className="flex items-center justify-center p-2 relative">
              <button onClick={() => navigate("/cart")}>
                <IoCartOutline
                  size={40}
                  className="hover:opacity-50 cursor-pointer"
                />
              </button>
              <div className="absolute top-0 right-0 w-6 h-6 rounded-full p-1 aspect-square border bg-emerald-500 text-emerald-50 flex items-center justify-center">
                <span className="text-xs font-bold  ">
                  {carts.length > 9 ? "9+" : carts.length}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
