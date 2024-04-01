import React, { useContext } from "react";
import { PropsWithChildren, useState } from "react";

export const ThemeContext = React.createContext(false);
export const ThemeUpdateContext = React.createContext(() => {});

export function ThemeProvider({ children }: PropsWithChildren) {
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme);
    }
    return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
    )
}

export function useTheme(): [boolean, Function] {
    const theme = useContext(ThemeContext);
    const toggleTheme = useContext(ThemeUpdateContext);
    return [theme, toggleTheme];
}