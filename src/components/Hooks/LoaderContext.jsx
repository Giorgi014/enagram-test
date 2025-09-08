import { createContext, useContext, useState, useEffect } from "react";
import "./css/LoaderContext.scss";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isLoading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
    } else {
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && (
        <article className="loader_wrapper">
          <section className="loader_cont">
            <div className="loader"></div>
            <div className="loading_cont">
              <p className="converting_text">
                Converting...Thank you For your Patience
              </p>
              <div className="loading">
                <p className="loader_text">{progress}%</p>
                <div className="loader_bar">
                  <div
                    className="loader_fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </article>
      )}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
