import { useContext } from "react";
import { ThemeContext } from "../store/providers/ThemeProvider";

export default function useThemeContext() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider")
    };

    return context;
}