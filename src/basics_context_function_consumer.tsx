import { useContext } from "react";
import { ThemeContext } from "./App";

export function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext)
    return <div>
        Function Component Using Context
        <div>
            {darkTheme ? 'dark' : 'light'}
        </div>
    </div>
}