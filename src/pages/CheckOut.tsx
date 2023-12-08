import { addToPurchase, addUserInfo } from "@/redux/reducer/purchseReducer";
import {
  cartTotal,
  clearCart,
  useSelectCart,
} from "@/redux/reducer/cartReducer";
import { useDispatch, useSelector } from "react-redux";

import Container from "@/components/Container";
import { Helmet } from "react-helmet";
import Input from "@/components/Input";
import NavBar from "@/components/NavBar";
import TextArea from "@/components/TextArea";
import TextError from "@/components/TextError";
import { UserProps } from "@/interface/user";
import Wrapper from "@/components/Wrapper";
import { formatCurrency } from "@/utils/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type ErrorFor = {
  field: keyof UserProps;
  message: string;
};
export default function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector(useSelectCart);
  const [userInfo, setUserInfo] = useState<UserProps>({} as UserProps);
  const [errors, setErrors] = useState<ErrorFor[]>([]);
  const totalCart = useSelector(cartTotal);
  const checkUserInfo = () => {
    const errors: ErrorFor[] = [];
    if (!userInfo.firstName) {
      errors.push({
        field: "firstName",
        message: "First name is required",
      });
    }
    if (!userInfo.lastName) {
      errors.push({
        field: "lastName",
        message: "Last name is required",
      });
    }
    if (!userInfo.email) {
      errors.push({
        field: "email",
        message: "Email is required",
      });
    }
    if (!userInfo.phone) {
      errors.push({
        field: "phone",
        message: "Phone is required",
      });
    }
    if (!userInfo.address) {
      errors.push({
        field: "address",
        message: "Address is required",
      });
    }
    return errors;
  };

  const handlePurchase = () => {
    const errors = checkUserInfo();
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    setErrors([]);
    dispatch(addToPurchase(carts));
    dispatch(addUserInfo(userInfo));
    dispatch(clearCart());
    navigate("/purchase");
  };
  const getErrorMessag = (field: keyof UserProps) => {
    return errors.find((e) => e.field === field)?.message;
  };
  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <Wrapper>
        <NavBar />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-10 my-10">
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold">Checkout</h1>
                <span className="text-gray-600 text-sm">
                  Fill in your details below or click an icon to log in:
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-gray-600 text-sm">First Name</span>
                  <Input
                    type="text"
                    value={userInfo.firstName}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, firstName: e.target.value })
                    }
                  />
                  <TextError>{getErrorMessag("firstName")}</TextError>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-600 text-sm">Last Name</span>
                  <Input
                    type="text"
                    value={userInfo.lastName}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, lastName: e.target.value })
                    }
                  />
                  <TextError>{getErrorMessag("lastName")}</TextError>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-600 text-sm">Email</span>
                  <Input
                    type="text"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                  />
                  <TextError>{getErrorMessag("email")}</TextError>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-600 text-sm">Phone</span>
                  <Input
                    type="text"
                    value={userInfo.phone}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, phone: e.target.value })
                    }
                  />
                  <TextError>{getErrorMessag("phone")}</TextError>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-600 text-sm">Address</span>
                  <TextArea
                    value={userInfo.address}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, address: e.target.value })
                    }
                  />
                  <TextError>{getErrorMessag("address")}</TextError>
                </div>
              </div>
            </div>

            <div className="my-10">
              <div className="p-5 border border-emerald-600 text-emerald-500 bg-white rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">
                    Shipping
                  </span>
                  <span className="text-2xl font-bold">Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">Total</span>
                  <span className="text-2xl font-bold">
                    {formatCurrency(totalCart)}
                  </span>
                </div>
                <div>
                  <button
                    className="w-full bg-emerald-500 text-emerald-50 py-3 mt-4 rounded-lg hover:shadow-2xl hover:shadow-emerald-200"
                    onClick={() => handlePurchase()}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}
