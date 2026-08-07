import useTheme from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
const { theme, toggle } = useTheme();

    return (
        <button className="cursor-pointer dark:hover:text-amber-300 hover:text-zinc-500 bg-none" onClick={toggle}>
            {theme === "dark" ? <Sun /> : <Moon />}
        </button>
    )
}