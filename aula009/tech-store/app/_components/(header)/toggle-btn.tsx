"use client";

import { setTheme } from "@/app/_utils/localStorage";
import { useShop } from "@/app/_utils/store";
import { LuSun, LuMoon } from "react-icons/lu";

export function ToggleBtn() {
    const { theme, updateTheme } = useShop();

    const handleClick = () => {
        const t = theme === "light" ? "dark" : "light";

        updateTheme(t);
        setTheme(t);
    };

    return (
        <button className="theme-toggle" onClick={handleClick}>
            {theme === "light" ? (
                <LuSun className="action-button-icon" />
            ) : (
                <LuMoon className="action-button-icon" />
            )}
        </button>
    );
}
