import { storiesOf } from '@storybook/react';
import * as __tests__ from '.';

// ⚙️ elements
// 🔨 custom
// 📺 views

// eslint-disable-next-line prettier/prettier
storiesOf('👽 experimental|{{pascalCase name}}', module)
  .add('basic', __tests__.basic.test)
  .add('empty', __tests__.empty.test);
