import { createContext, useContext, useState } from "react";


export const AllContext = createContext();



export const AllContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getMe = async () => {
        const res = await fetch("/api/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await res.json();
        if (data.user) {
    }
}

    return (

        <AllContext.Provider value={{}} >
            {children}
            </AllContext.Provider>
    )
}