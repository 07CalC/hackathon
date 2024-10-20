import { createContext, useContext, useState } from "react";


export const AllContext = createContext();



export const AllContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return (

        <AllContext.Provider value={{count, setCount}} >
            {children}
            </AllContext.Provider>
    )
}