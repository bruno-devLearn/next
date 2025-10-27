import { FiMoon, FiSun } from "react-icons/fi";

export function ToggleTheme({
    theme,
    setTheme,
}: {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <button
            className="themeToggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <div className="icon">
                {theme === "light" ? <FiMoon /> : <FiSun />}
            </div>
            <div className="text">
                {theme === "light" ? "Dark" : "Light"} Mode
            </div>
        </button>
    );
}
