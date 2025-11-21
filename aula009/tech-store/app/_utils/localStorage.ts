import { Theme } from "./types";

export const getTheme = (): Theme =>
    (localStorage.getItem("theme") as "light" | "dark") || "light";

export const setTheme = (theme) => localStorage.setItem("theme", theme);
