import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "./Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageClass from "../Layout/Dashboard/AdminDashboard/ManageClass";
import ManageUser from "../Layout/Dashboard/AdminDashboard/ManageUser";
import MySelectedClass from "../Layout/Dashboard/StudentsBoard/MySelectedClass";
import MyEnrolledClass from "../Layout/Dashboard/StudentsBoard/MyEnrolledClass";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>

  },
  {

    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'manageclass',
        element: <ManageClass></ManageClass>
      },
      {
        path: 'manageuser',
        element: <ManageUser></ManageUser>
      },
      {
        path: 'myselectedclass',
        element: <MySelectedClass></MySelectedClass>
      },
      {
        path: 'myenrolledclass',
        element: <MyEnrolledClass></MyEnrolledClass>
      }

    ]
  }
]);
export default router;  