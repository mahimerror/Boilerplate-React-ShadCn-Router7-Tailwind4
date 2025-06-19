import { createContext } from "react"
export const MainContext = createContext()

function ContextProvider({children}) {

    const mainStateInfo = {
      
    }
  return (
    <MainContext.Provider value={mainStateInfo}>{children}</MainContext.Provider>
  )
}

export default ContextProvider