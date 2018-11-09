import React from 'react';

import { storiesOf } from '@storybook/react';

import Ghost from '../src';

storiesOf('Ghost', module)
  .add('simple placeholder', () => (
    <h1>
      <Ghost>text</Ghost>
    </h1>
  ))
  .add('Card example', () => (
    <div>
      <Ghost />
    </div>
  ));
