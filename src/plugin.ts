import { Plugins } from '@capacitor/core';

import type { ISentryCapacitorPlugin } from './definitions';

// Left here to support v2. This will be dropped in v4.
// eslint-disable-next-line deprecation/deprecation
const SentryCapacitor = Plugins.SentryCapacitor as ISentryCapacitorPlugin;

export { SentryCapacitor };

// NOTE: We are leaving this here for when we are going to drop v2 support
//
// import { registerPlugin } from '@capacitor/core';

// import { SentryCapacitorWeb } from './web';
// const SentryCapacitor = registerPlugin<ISentryCapacitorPlugin>(
//   'SentryCapacitor',
//   () => ({
//     web: new SentryCapacitorWeb(),
//   }),
// );
