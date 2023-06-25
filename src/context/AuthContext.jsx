import { createContext, useState } from "react";

export const AuthContext = createContext({
    jwt: null,
    user: null
})

export function AuthProvider({ children }) {
    const [ auth, setAuth ] = useState({
        jwt: null,
        user: null
    }) 

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}