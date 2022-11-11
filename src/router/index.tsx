import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";
import Card from "../components/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
  },
  {
    path: "/details",
    element: < Card />,
  },
]);

export default router;