import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Login from './../pages/Login/Login';
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EachRoom from "../pages/EachRoomDetails/EachRoom";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
          loader: ({params}) => fetch(`https://room-booking-server-two.vercel.app/rooms/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;