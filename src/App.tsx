import "@scss/styles.scss";
import classes from "./App.module.scss";
import PageRouter from "./components/PageRouter/PageRouter";
import { RouteType } from "./types/types";
import { FC } from "react";

interface AppProps {
  routes: RouteType[];
}

const App: FC<AppProps> = ({ routes }) => {
  return (
    <>
      <div className={classes.background}></div>
      <div className={classes.app}>
        <PageRouter routes={routes} />
      </div>
    </>
  );
};

export default App;
