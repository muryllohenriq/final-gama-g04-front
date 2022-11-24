import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { Control } from "../pages/Control";
import { Bill } from "../pages/Bill";
import  { Search }  from "../pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
  },
  {
    path: "/details/:id",
    element: < Details />,
  },
  {
    path: '/control',
    element: <Control />
  },
  {
    path: '/bill',
    element: <Bill />
  },
  {
    path: '/search',
    element: <Search />
  }
]);

export default router;