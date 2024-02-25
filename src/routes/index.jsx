import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Success } from "../pages/Success";
import { HelloWorld } from "../HelloWorld";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/success", element: <Success /> },
  { path: "/hello", element: <HelloWorld /> },
]);
