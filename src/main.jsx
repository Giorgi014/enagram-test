import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = React.lazy(() => import("./components/Main/Main.jsx"));
const Scribe = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Scribe }))
);
const TextComparison = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.TextComparison }))
);
const TextToVoice = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.TextToVoice }))
);
const VoiceToText = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.VoiceToText }))
);
const Convertation = React.lazy(() =>
  import("./components/Route.jsx").then((m) => ({ default: m.Convertation }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "მართლმწერი",
        element: <Scribe />,
      },
      {
        path: "ტექსტის_შედარება",
        element: <TextComparison />,
      },
      {
        path: "ხმა_ტექსტი",
        element: <TextToVoice />,
      },
      {
        path: "ტექსტი_ხმა",
        element: <VoiceToText />,
      },
      {
        path: "კონვერტაცია",
        element: <Convertation />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
