import { useTheme } from "./basics_theme_context"
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
export function Vite() {
    const [theme] = useTheme();
    return <div style={{backgroundColor: theme ? 'grey' : 'white'}}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
}