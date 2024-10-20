import { lazy } from 'react';

const AsyncNoLogoutDetected = lazy(async () => await import('./NoLogoutDetected'));

export { AsyncNoLogoutDetected as NoLogoutDetected };
