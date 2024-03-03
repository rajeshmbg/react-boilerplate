import { RouteType } from "src/models";

const RouteElementWrapper = (routeItem: RouteType): JSX.Element => {
  const { component: RouteComponent } = routeItem;
  //   const { component: RouteComponent, permission, redirectForAuthenticatedUser, title, path } = routeItem;
  return (RouteComponent && <RouteComponent />) || <></>;
};

export default RouteElementWrapper;
