import type { FC, ReactElement } from "react";
import PrivateRoute from "./pravateRoute";
import { useIntl } from "react-intl";

// export interface WrapperRouteProps extends RouteProps {
//   /** document title locale id */
//   titleId: string;
//   /** authorization？ */
//   auth?: boolean;
// }

const WrapperRouteComponent: FC<any> = ({ titleId, auth, ...props }) => {
  const { formatMessage } = useIntl();

  if (titleId) {
    document.title = formatMessage({
      id: titleId,
    });
  }

  return auth ? <PrivateRoute {...props} /> : (props.element as ReactElement);
};

export default WrapperRouteComponent;
