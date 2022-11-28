import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { Control } from "../pages/Control";
import { Bill } from "../pages/Bill";
import  { Search }  from "../pages/Search";
import  { Kitchen }  from "../pages/Kitchen";
import { Confirmed } from "../pages/Confirmed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  },
  {
    path: '/kitchen',
    element: <Kitchen />
  },
  {
    path: '/Confirmed',
    element: <Confirmed />,
  }
]);

export default router;