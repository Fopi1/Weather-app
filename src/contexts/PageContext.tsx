import React, { createContext, FC, useState } from "react";

interface PageTransitionContextType {
  isRevealed: boolean;
  setIsRevealed: (value: boolean) => void;
}

const PageTransitionContext = createContext<
  PageTransitionContextType | undefined
>(undefined);

interface PageContextProps {
  children: React.ReactNode;
}

const PageContext: FC<PageContextProps> = ({ children }) => {
  const [isRevealed, setIsRevealed] = useState(true);
  return (
    <PageTransitionContext.Provider value={{ isRevealed, setIsRevealed }}>
      {children}
    </PageTransitionContext.Provider>
  );
};
export { PageTransitionContext };
export default PageContext;
