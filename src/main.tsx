import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { route } from "./routes/Routes";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
    <RouterProvider router={route} />
    </MainProvider>
  </StrictMode>
);
