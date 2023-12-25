
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Welcome from "../pages/Welcome";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },

    ]
  }
])

export default router;
