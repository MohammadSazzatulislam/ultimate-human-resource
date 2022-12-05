import { createBrowserRouter } from "react-router-dom";
import Attendance from "../Component/Attendance/Attendance";
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
  {
    path: "/attendance",
    element: <Attendance></Attendance>,
  },
]);

export default router;
