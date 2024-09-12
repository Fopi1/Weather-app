import { FC } from "react";
import { NavLink, useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import classes from "./PageRouter.module.scss";
import "./PageRouterAnimation.scss";
import { RouteType } from "@/types/types";

interface PageRouterProps {
  routes: RouteType[];
}

const PageRouter: FC<PageRouterProps> = ({ routes }) => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className={classes.pageWrapper}>
      {routes.map((route) => {
        return (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            {route.name}
          </NavLink>
        );
      })}
      <div className={classes.pageWrapperInner}>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={400}
            classNames="page"
            unmountOnExit
          >
            <div ref={nodeRef}>{currentOutlet}</div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default PageRouter;
