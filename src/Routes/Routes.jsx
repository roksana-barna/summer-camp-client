import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "./Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
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
            element:<Register></Register>
          },
        ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>

    }
  ]);
export default router;  