import reactLogo from "@/assets/react.svg";
import { useNavigate } from "react-router-dom";

export default function BrandLogo() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex items-center gap-2 h-full cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={reactLogo} alt="" className="animation-rotate" />
        <span className="text-2xl font-bold">React</span>
      </div>
    </>
  );
}
