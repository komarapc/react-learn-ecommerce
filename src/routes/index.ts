import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/404"));
const ProductDetail = lazy(() => import("@/pages/product/ProductDetail"));
const ErrorBoundary = lazy(() => import("@/pages/Error"));
const Cart = lazy(() => import("@/pages/Cart"));
const CheckOut = lazy(() => import("@/pages/CheckOut"));
const Purchase = lazy(() => import("@/pages/Purchase"));
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/cart",
    Component: Cart,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/checkout",
    Component: CheckOut,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/purchase",
    Component: Purchase,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
