import { createBrowserRouter } from "react-router-dom";
import TimeLine from "./Pages/Timeline";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <TimeLine />
    },
    {
        path: '/tweet',
        element: ''
    }
])

export default Router