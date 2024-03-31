import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BasicUseEffect } from './basics_use_effect';
import { BasicUseEffectCleanUp } from './basics_use_effect_cleanup';
import { AuthorizedTextComponent } from './basics_hoc';
import { BasicListRenderProp } from './basics_render_prop';
import { BasicUseCallback } from './basics_use_callback';
import { BasicMemo } from './basics_use_memo';

const arr = [18, 4, -1, 241];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BasicUseEffect />
      <BasicUseEffectCleanUp />
      <AuthorizedTextComponent text='HOC' />
      <BasicListRenderProp items={[{name: 'Poorshad'}, { name: 'Marisa' }]} renderItem={(item) => { return <option key={item.name}>{item.name}</option> }}  />
      <BasicUseCallback />
      <BasicMemo count={count} arr={arr} />
    </>
  );
}

export default App;
