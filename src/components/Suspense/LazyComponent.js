import React, { lazy, Suspense } from "react";
const DynamicComponent = lazy(() => import('./DynamicComponent'));

const LazyComponent = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent />
    </Suspense>
);

export default LazyComponent;