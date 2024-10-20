import { lazy } from 'react';

const AsyncUser = lazy(async () => await import('./User'));

export { AsyncUser as User };
