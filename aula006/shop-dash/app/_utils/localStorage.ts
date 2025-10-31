export const getTheme = () => {
    const data = localStorage.getItem("theme");
    return data || "light";
};

export const setTheme = (theme) => localStorage.setItem("theme", theme);
