import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
  },
  {
    path: "/details",
    element: < Details />,
  },
]);

export default router;