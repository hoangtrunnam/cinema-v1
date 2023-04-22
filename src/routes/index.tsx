import { Navigate } from "react-router";
import WrapperRouteComponent from "./config";
import { useRoutes } from "react-router-dom";
// import LoginPage from '../pages/login';
import HomePage from "../pages/home";
import ErrorPage from "../pages/errorPage";
import type { FC } from "react";
import Layouts from "src/pages/layouts";
import Card from "src/pages/card";
import LoginPage from "src/pages/login";
import UserProfile from "src/pages/userProfile";

// and then replace history.push('/path') with navigate('/path')

// Change history.replace('/path') with navigate('/path', { replace: true })

// Want to use state in push/navigate do navigate('/path', { state: { name:'Xyz' }})

const routeList: any = [
  // {
  //   path: '/login',
  //   element: <WrapperRouteComponent element={<LoginPage />} titleId="login" />,
  // },
  {
    path: "/",
    element: <WrapperRouteComponent element={<Layouts />} titleId="layout" />,
    children: [
      {
        path: "",
        element: <Navigate to="homePage" />,
      },
      {
        path: "/login",
        element: (
          <WrapperRouteComponent element={<LoginPage />} titleId="login" />
        ),
      },
      {
        path: "/homePage",
        element: (
          <WrapperRouteComponent element={<HomePage />} titleId="home-page" />
        ),
      },
      {
        path: "/card",
        element: <WrapperRouteComponent element={<Card />} titleId="card" />,
      },
      {
        path: "/userProfile",
        element: (
          <WrapperRouteComponent
            element={<UserProfile />}
            titleId="my-profile"
          />
        ),
      },
      {
        path: "*",
        element: (
          <WrapperRouteComponent
            element={<ErrorPage />}
            titleId="gloabal.tips.notfound"
          />
        ),
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
