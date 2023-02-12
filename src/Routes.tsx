import { createBrowserRouter } from "react-router-dom";
import Status from "./Pages/Status/Status";
import TimeLine from "./Pages/Timeline/Timeline";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <TimeLine />
    },
    {
        path: '/status',
        element: <Status />
    }
])

export default Router