import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import ReduxProvider from "./redux/ReduxProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { router } from "./routes/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </ReduxProvider>
  </React.StrictMode>
);
