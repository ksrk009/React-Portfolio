import { createContext, useContext, useState } from "react";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [showModel, setShowModel] = useState(false);

  const showModelHandler = () => {
    setShowModel(true);
  };
  const closeModelHandler = () => {
    setShowModel(false);
  };

  return (
    <ModelContext.Provider
      value={{ showModel, showModelHandler, closeModelHandler }}
    >
      {children}
    </ModelContext.Provider>
  );
};

// custom hook to consume the modal context anywehre in our app
export const useModelContext = () => {
  return useContext(ModelContext);
};
