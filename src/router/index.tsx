import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { Account } from "../components/Account/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
  },
  {
    path: "/details",
    element: < Details />,
  },
  {
    path: '/account',
    element: < Account />
  },
]);

export default router;