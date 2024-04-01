import React from "react";
import { ThemeContext } from "./App";

export class ClassContextComponent extends React.Component {
    
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    darkTheme => {
                        return <div>
                            {darkTheme ? 'dark' : 'light'}
                        </div>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}