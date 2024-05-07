import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../shared/ErrorPage/ErrorPage";
import About from "../pages/ServicesPages/About_us/About";
import Faq from "../pages/ServicesPages/FAQ/Faq";
import Contact from "../pages/ContactPage/Contact";
import Signup from "../pages/Auth/Signup/Signup";
import Login from "../pages/Auth/Login/Login";
import AuthRoute from "./authRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: (
          <AuthRoute>
            <Signup />
          </AuthRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthRoute>
            <Login />
          </AuthRoute>
        ),
      },
    ],
  },
]);
