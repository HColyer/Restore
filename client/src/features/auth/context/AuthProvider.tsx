import { createContext, type ReactNode } from "react";
import { useState } from "react";

type AuthContextValue = {
    loggedIn: boolean,
    login: (token: string) => void,
    logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null);

type Props = {
    children: ReactNode
}

export default function AuthProvider({ children }: Props) {

    const [token, setToken] = useState<string | null>(null);

    const login = (token: string) => {
        setToken(token);
    };

    const logout = () => {
        setToken(null);
    };

    const ctx = {
        loggedIn: token !== null,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </ AuthContext.Provider>
    )
}