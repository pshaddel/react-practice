import { createContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BasicUseEffect } from './basics_use_effect';
import { BasicUseEffectCleanUp } from './basics_use_effect_cleanup';
import { AuthorizedTextComponent } from './basics_hoc';
import { BasicListRenderProp } from './basics_render_prop';
import { BasicUseCallback } from './basics_use_callback';
import { BasicMemo } from './basics_use_memo';
import { BasicSuspense } from './basics_suspense';
import { BasicUseRef } from './basics_use_ref';
import { FunctionContextComponent } from './basics_context_function_consumer';
import { ClassContextComponent } from './basics_context_class_consumer';

export const ThemeContext = createContext(false);

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <div style={{backgroundColor: darkTheme ? 'grey' : 'white'}}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <BasicUseEffect />
        <BasicUseEffectCleanUp />
        <AuthorizedTextComponent text='HOC' />
        <BasicListRenderProp items={[{ name: 'Poorshad' }, { name: 'Marisa' }]} renderItem={(item) => { return <option key={item.name}>{item.name}</option> }} />
        <BasicUseCallback />
        <BasicMemo count={1} search={{ text: 'poorshad' }} />
        <BasicSuspense />
        <BasicUseRef />
        
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
