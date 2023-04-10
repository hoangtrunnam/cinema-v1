import type { FC } from "react";
import { Navigate } from "react-router-dom";
import { RouteProps, useLocation } from "react-router";
import { useCookie } from "src/hooks/useCookie";
// import { ILoginResult } from '@/interface/user/login';

const PrivateRoute: FC<RouteProps> = (props) => {
  const location = useLocation();

  const { dataCookie } = useCookie<any>("users");

  return dataCookie?.token ? (
    (props.element as React.ReactElement)
  ) : (
    <Navigate
      to={`/login${"?from=" + encodeURIComponent(location.pathname)}`}
    />
  );
};

export default PrivateRoute;
