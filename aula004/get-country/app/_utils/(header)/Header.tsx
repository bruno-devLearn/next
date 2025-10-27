import "./header.css";
import { ToggleTheme } from "./ToggleTheme";

export function Header({
    theme,
    setTheme,
}: {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <h1>Where in the world?</h1>
                </div>
                <ToggleTheme theme={theme} setTheme={setTheme} />
            </div>
        </header>
    );
}
