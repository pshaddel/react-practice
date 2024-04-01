import React, { Suspense } from 'react';

const HeavyComponent = React.lazy(() => import('./heavy_component'));

export function BasicSuspense() {
  return (
    <div>
      <Suspense fallback={<div>Loading Heavy Component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}