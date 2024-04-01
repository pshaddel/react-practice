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
import { ThemeProvider } from './basics_theme_context';
import { Vite } from './vite';
import { BasicTransition } from './basics_use_transition';
import { BasicDefferedValueParent } from './basics_use_deferred_value';

function App() {

  return (
    <>
      <ThemeProvider>
        <Vite />
        <BasicUseEffect />
        <BasicUseEffectCleanUp />
        <AuthorizedTextComponent text='HOC' />
        <BasicListRenderProp items={[{ name: 'Poorshad' }, { name: 'Marisa' }]} renderItem={(item) => { return <option key={item.name}>{item.name}</option> }} />
        <BasicUseCallback />
        <BasicMemo count={1} search={{ text: 'poorshad' }} />
        <BasicSuspense />
        <BasicUseRef />
        <FunctionContextComponent />
        <ClassContextComponent />
        <BasicTransition />
        <BasicDefferedValueParent/>
      </ThemeProvider>
    </>
  );
}

export default App;
