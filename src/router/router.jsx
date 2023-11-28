import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import AddArticles from "../pages/addArticles/AddArticles";
import AllArticles from "../pages/allArticles/AllArticles";
import ArticlesDetails from "../pages/articlesDetails/ArticlesDetails";
import Subscription from "../pages/subscription/Subscription";
import PremiumArticles from "../pages/premiumArticles/PremiumArticles";
import MyArticles from "../pages/myArticles/MyArticles";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddPublisher from "../pages/dashboard/addPublisher/AddPublisher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/add-Articles",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "/all-articles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/articles-Details/:id",
        element: <ArticlesDetails></ArticlesDetails>,
      },
      {
        path: "/subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "/premium-Articles",
        element: <PremiumArticles></PremiumArticles>,
      },
      {
        path: "/my-Articles",
        element: <MyArticles></MyArticles>,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/add-publisher",
        element: <AddPublisher></AddPublisher>,
      },
    ],
  },
]);

export default router;
