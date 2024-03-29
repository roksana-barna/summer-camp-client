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
import AddClass from "../Layout/Dashboard/InstructorBoard/AddClass";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import StudentsRole from "../Layout/Dashboard/StudentsBoard/StudentsRole";
import FeedBack from "../Layout/Dashboard/AdminDashboard/FeedBack";
import MyClasses from "../Layout/Dashboard/InstructorBoard/MyClasses";
import Instructor from "./Home/Instructor";
import Classes from "./Home/Classes";
import Payment from "./Payment";
import StudentRoute from "./StudentRoute";
// import InstructorRoute from "./InstructorRoute";
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
      {
        path: 'instructors',
        element: <Instructor></Instructor>
      },
      {
        path: 'classespage',
        element: <Classes></Classes>
      },
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>

  },
  {

    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard>,</PrivateRoute>,
    children: [
      {
        path: 'manageclass',
        element:<AdminRoute> <ManageClass></ManageClass></AdminRoute>
      },
      {
        path: 'manageuser',
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
      },
      {
        path: 'myselectedclass',
        element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute>
      },
      {
        path: 'myenrolledclass',
        element: <StudentRoute><MyEnrolledClass></MyEnrolledClass></StudentRoute>
      },
      {
        path: 'addaclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'myclasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: 'studentrole',
        element: <StudentsRole></StudentsRole>
      },
      {
        path: 'feedback',
        element: <FeedBack></FeedBack>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
     
     
     
       

    ]
  }
]);
export default router;  