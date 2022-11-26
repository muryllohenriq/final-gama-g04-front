import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { Control } from "../pages/Control";
import { Bill } from "../pages/Bill";
import  { Search }  from "../pages/Search";
import  { Kitchen }  from "../pages/Kitchen";

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
    element: <Bill id={""} idTable={""} command={0} order={[]} />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/kitchen',
    element: <Kitchen />
  }
]);

export default router;