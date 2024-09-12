import { ReactNode, RefObject } from "react";

export type PanelOpenState = {
  isPanelOpen: boolean;
};

export type ForecastRevealState = {
  isForecastRevealed: boolean;
};

export interface RouteType {
  path: string;
  name: string;
  element: ReactNode;
  nodeRef: RefObject<HTMLDivElement>;
}
