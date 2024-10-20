import { lazy } from 'react';

const AsyncAdmin = lazy(async () => await import('./Admin'));

export { AsyncAdmin as Admin };
