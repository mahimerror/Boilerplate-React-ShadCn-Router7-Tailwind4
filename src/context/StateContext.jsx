import { createContext, useState } from "react";

const StateContext = createContext(null);

const StateContextProvider = ({ children }) => {
  const [questionnariesData, setQuestionnariesData] = useState();
  const [nameOfSubCategory, setNameOfSubCategory] = useState("");
  const [location, setLocation] = useState(null);

  return (
    <StateContext.Provider
      value={{ questionnariesData, setQuestionnariesData, location, setLocation, nameOfSubCategory, setNameOfSubCategory }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };
