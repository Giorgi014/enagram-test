import { createContext, useContext, useState } from "react";
import "./Css/LoaderContext.scss";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && (
        <div class="loader"></div>
      )}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);