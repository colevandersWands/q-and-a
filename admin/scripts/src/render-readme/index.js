import prettier from 'prettier';

import { top } from './top.js';
import { section } from './section.js';

import { module } from './components/module.js';

import { prettierConfig } from '../../prettier-config.js';

export const renderReadme = (config = {}) =>
  Object.fromEntries(
    Object.entries({
      top: top(config),
      modules:
        config?.modules?.path?.length > 0
          ? section(config, {
              title: 'Modules',
              intro: config.modules.description,
              component: module,
              data: config.modules.path,
            })
          : '',
    }).map((entry) => [entry[0], prettier.format(entry[1], prettierConfig)]),
  );
