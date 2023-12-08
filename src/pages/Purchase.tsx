import Card, { CardBody, CardHeader } from "@/components/Card";
import { getPurchase, totalPurchase } from "@/redux/reducer/purchseReducer";

import Container from "@/components/Container";
import Divider from "@/components/Divider";
import { Helmet } from "react-helmet";
import NavBar from "@/components/NavBar";
import Wrapper from "@/components/Wrapper";
import { formatCurrency } from "@/utils/formatCurrency";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Purchase() {
  const navigate = useNavigate();
  const purchases = useSelector(getPurchase);
  const total = useSelector(totalPurchase);
  useEffect(() => {
    if (!purchases.purchaseItems.length) {
      navigate("/");
    }
  }, [purchases, navigate]);

  const invoice = () => {
    return (
      <>
        <Container id="invoice" className="mb-10">
          {/* thank you for purchase */}
          <div className="p-5 border border-emerald-600 text-emerald-600 bg-emerald-50 rounded-xl shadow-md">
            <h1 className="font-bold text-sm">Thank you for purchase</h1>
            <p>
              Your order has been received and will be processed once payment
              has
            </p>
            <p>been confirmed.</p>
            <div className="mt-4">
              <button
                className="px-6 py-2 bg-emerald-600 text-emerald-50 rounded-md"
                onClick={() => navigate("/")}
              >
                Back
              </button>
            </div>
          </div>
          <Card className="mt-10">
            <CardHeader>
              <h1 className="text-lg font-bold text-gray-600">Order Details</h1>
            </CardHeader>

            <CardBody>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">
                    Full Name
                  </span>
                  <span className="text-gray-600 text-sm font-bold">
                    {purchases.user.firstName} {purchases.user.lastName}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">Telp</span>
                  <span className="text-gray-600 text-sm font-bold">
                    {purchases.user.phone}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">Email</span>
                  <span className="text-gray-600 text-sm font-bold">
                    {purchases.user.email}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">
                    Address
                  </span>
                  <span className="text-gray-600 text-sm font-bold">
                    {purchases.user.address}
                  </span>
                </div>
              </div>
            </CardBody>
            <Divider />

            <CardBody>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">
                    Order Number
                  </span>
                  <span className="text-gray-600 text-sm font-bold">
                    {purchases.id}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">Date</span>
                  <span className="text-gray-600 text-sm font-bold">
                    {new Date(purchases.date!).toLocaleString("id-ID", {
                      dateStyle: "long",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">Total</span>
                  <span className="text-gray-600 text-sm font-bold">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>
            </CardBody>

            <Divider />
            <CardBody>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">
                    Payment Method
                  </span>
                  <span className="text-gray-600 text-sm font-bold">
                    Cash on delivery
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm font-bold">
                    Shipping
                  </span>
                  <span className="text-gray-600 text-sm font-bold">Free</span>
                </div>
              </div>
            </CardBody>
            <Divider />
            <CardBody>
              {purchases.purchaseItems.map((purchase, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-20 aspect-square">
                      <img
                        src={purchase.image}
                        alt={`image-${purchase.title}`}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-sm font-bold">{purchase.title}</h1>
                      <span className="text-gray-600 text-sm">
                        {purchase.category}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {formatCurrency(purchase.price)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-600 text-sm">Qty</span>
                      <span className="text-gray-600 text-sm">
                        {purchase.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-600 text-sm">Total</span>
                      <span className="text-gray-600 text-sm">
                        {formatCurrency(total)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </Container>
      </>
    );
  };
  return (
    <>
      <Helmet>
        <title>Purchase</title>
      </Helmet>
      <Wrapper>
        <NavBar />
        {invoice()}
      </Wrapper>
    </>
  );
}
