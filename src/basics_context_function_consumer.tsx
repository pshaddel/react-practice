import { useTheme } from "./basics_theme_context";

export function FunctionContextComponent() {
    const [darkTheme, setDarkTheme] = useTheme();
    return <div>
        Function Component Using Context
        <div>
            {darkTheme ? 'dark' : 'light'}
        </div>
        <button onClick={() => setDarkTheme()} >Set Theme</button>
    </div>
}  