import { WebPlugin } from '@capacitor/core';

import type { MapkitPlugin } from './definitions';

export class MapkitWeb extends WebPlugin implements MapkitPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
