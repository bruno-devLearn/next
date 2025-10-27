import { FiMoon } from "react-icons/fi";
import "./header.css";

export function Header() {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <h1>Where in the world?</h1>
                </div>
                <button className="themeToggle">
                    <div className="icon">
                        <FiMoon />
                    </div>
                    <div className="text">Dark Mode</div>
                </button>
            </div>
        </header>
    );
}
