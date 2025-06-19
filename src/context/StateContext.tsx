// import { createContext, useState, type ReactNode } from "react";

// const StateContext = createContext(null);

// const StateContextProvider = ({ children }: { children: ReactNode }) => {
//   const [questionnariesData, setQuestionnariesData] = useState();
//   const [nameOfSubCategory, setNameOfSubCategory] = useState("");
//   const [location, setLocation] = useState(null);

//   return (
//     <StateContext.Provider
//       value={{
//         questionnariesData,
//         setQuestionnariesData,
//         location,
//         setLocation,
//         nameOfSubCategory,
//         setNameOfSubCategory,
//       }}
//     >
//       {children}
//     </StateContext.Provider>
//   );
// };

// export { StateContextProvider, StateContext };
