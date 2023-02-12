import { createBrowserRouter } from "react-router-dom";
import Default from "./Layouts/Default";
import Status from "./Pages/Status/Status";
import TimeLine from "./Pages/Timeline/Timeline";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <TimeLine />,
      },
      {
        path: "/status",
        element: <Status />,
      },
    ],
  },
]);

export default Router;
