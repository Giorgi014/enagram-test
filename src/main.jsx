import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoaderProvider } from "./components/Hooks/LoaderContext.jsx";

const TextComparison = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.TextComparison }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TextComparison />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <RouterProvider router={router} />
    </LoaderProvider>
  </StrictMode>
);
