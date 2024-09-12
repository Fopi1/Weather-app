import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.tsx";
import DetailedForecastPage from "./pages/DetailedForecastPage/DetailedForecastPage.tsx";
import ForecastPage from "./pages/ForecastPage/ForecastPage.tsx";
import { createRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteType } from "./types/types.ts";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import SearchPage from "./pages/SearchPage/SearchPage.tsx";

const routes: RouteType[] = [
  {
    path: "/Forecast",
    name: "Forecast",
    element: <ForecastPage />,
    nodeRef: createRef(),
  },
  {
    path: "/DetailedForecast",
    name: "DetailedForecast",
    element: <DetailedForecastPage />,
    nodeRef: createRef(),
  },
  {
    path: "/Settings",
    name: "Settings",
    element: <SettingsPage />,
    nodeRef: createRef(),
  },
  {
    path: "/Search",
    name: "Search",
    element: <SearchPage />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App routes={routes} />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
