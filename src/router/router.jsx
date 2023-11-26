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
        path: "/articles-Details",
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
]);

export default router;
