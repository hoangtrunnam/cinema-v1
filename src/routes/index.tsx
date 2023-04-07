import { Navigate } from 'react-router';
import WrapperRouteComponent from './config';
import { useRoutes } from 'react-router-dom';
// import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import ErrorPage from '../pages/errorPage';
import type { FC } from 'react';
import Layouts from 'src/pages/layouts';

const routeList: any = [
  // {
  //   path: '/login',
  //   element: <WrapperRouteComponent element={<LoginPage />} titleId="login" />,
  // },
  {
    path: '/',
    element: <WrapperRouteComponent element={<Layouts />} titleId="" />,
    children: [
      {
        path: '',
        element: <Navigate to="dashboard" />,
      },
      {
        path: '/homePage',
        element: <WrapperRouteComponent element={<HomePage />} titleId="home-page" />,
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<ErrorPage />} titleId="gloabal.tips.notfound" />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;