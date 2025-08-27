import { registerPlugin } from '@capacitor/core';

import type { MapkitPlugin } from './definitions';

const Mapkit = registerPlugin<MapkitPlugin>('Mapkit', {
  web: () => import('./web').then((m) => new m.MapkitWeb()),
});

export * from './definitions';
export { Mapkit };
