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
import { ErrorBoundary } from './error_boundy';
import { CorruptComponent } from './corrupt_component';
import { Profiler, StrictMode } from 'react';

function App() {

  return (
     <StrictMode>
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

        <Profiler id="differedValue" onRender={onRender}>
        <BasicDefferedValueParent/>
        </Profiler>
        
        <ErrorBoundary>
          <CorruptComponent />
        </ErrorBoundary>
      </ThemeProvider>
      </StrictMode>
  );
}

function onRender(id: string, phase: string, actualDuration: number, baseDuration: number, startTime: number, commitTime: number) {
  // Aggregate or log render timings...
  console.log({
    id, phase, actualDuration, baseDuration, startTime, commitTime
  })
}

export default App;
