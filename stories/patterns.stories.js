import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Ghost from '../src';

import './demo-styles.css';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const lengthOptions = {
  range: true,
  min: 1,
  max: 300,
  step: 1,
};

stories.add('Some example', () => (
  <article>
    <p>
      <Ghost loading={boolean('Loading', true)} length={number('Length', 189, lengthOptions)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor id voluptas asperiores
        nihil vero totam aut eum fugiat rerum, atque deserunt natus ad autem saepe modi incidunt.
        At, placeat!
      </Ghost>
    </p>
  </article>
));
