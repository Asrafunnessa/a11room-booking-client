import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Login from './../pages/Login/Login';
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EachRoom from "../pages/EachRoomDetails/EachRoom";
import ConfirmBooking from "../pages/ConfirmBooking/ConfirmBooking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/rooms',
          element: <Rooms></Rooms>
        },
        {
          path: 'eachRoomDetails/:id',
          element: <EachRoom></EachRoom>,
          loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
        },
        {
          path: 'confirmBooking/:id',
          element: <ConfirmBooking></ConfirmBooking>,
          loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router;