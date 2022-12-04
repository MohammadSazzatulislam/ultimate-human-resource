import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Component/LogIn/LogIn";
import SignUp from "../Component/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
]);

export default router;
