import { createContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

type ThemeProviderValue = {
    theme: Theme,
    toggle: () => void,
}

export const ThemeContext = createContext<ThemeProviderValue | null>(null)

type ThemeProviderProps = {
    children: ReactNode,
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark" )
    }, [theme])

    function toggle() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}