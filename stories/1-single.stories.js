import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Ghost from '../src';

import './demo-styles.css';

const stories = storiesOf('1: Single line', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const lengthOptions = {
  range: true,
  min: 1,
  max: 300,
  step: 1,
};

// Knobs for React props
stories.add('Headline', () => (
  <article>
    <h1>
      <Ghost loading={boolean('Loading', true)}>Welcome to Valhalla!</Ghost>
    </h1>
  </article>
));

// Knobs for React props
stories.add('Headline (All props)', () => (
  <article>
    <h1>
      <Ghost
        loading={boolean('Loading', true)}
        length={number('Length', 15, lengthOptions)}
        fullWidth={boolean('fullWidth', false)}
        variate={boolean('variate', false)}
      >
        Welcome to Valhalla!
      </Ghost>
    </h1>
  </article>
));
