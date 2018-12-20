import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Ghost from '../src';

import './basic.css';

const stories = storiesOf('Basic usage', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const lengthOptions = {
  range: true,
  min: 1,
  max: 300,
  step: 1,
};

stories.add('Headline', () => (
  <article className="article">
    <h1>
      <Ghost loading={boolean('Loading', true)}>Welcome to Valhalla!</Ghost>
    </h1>
  </article>
));

stories.add('Paragraph', () => (
  <article className="article">
    <p>
      <Ghost loading={boolean('Loading', true)} length={189}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor id voluptas asperiores
        nihil vero totam aut eum fugiat rerum, atque deserunt natus ad autem saepe modi incidunt.
        At, placeat!
      </Ghost>
    </p>
  </article>
));

stories.add('Article', () => (
  <article className="article">
    <header>
      <h1>
        <Ghost loading={boolean('Loading', true)}>Welcome to Valhalla!</Ghost>
      </h1>
      <p>
        <Ghost loading={boolean('Loading', true)} length={20}>
          Published: <time pubdate="pubdate">2020-10-09</time>
        </Ghost>
      </p>
    </header>
    <p>
      <Ghost loading={boolean('Loading', true)} length={189}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor id voluptas asperiores
        nihil vero totam aut eum fugiat rerum, atque deserunt natus ad autem saepe modi incidunt.
        At, placeat!
      </Ghost>
    </p>
    <p>
      <Ghost loading={boolean('Loading', true)} length={20}>
        Author: <a href="#">Lorem ipsum</a>
      </Ghost>
    </p>
  </article>
));

stories.add('Article (Custom props)', () => (
  <article className="article">
    <header>
      <h1>
        <Ghost
          loading={boolean('Loading', true)}
          length={number('Headline Length', 15, lengthOptions)}
        >
          Welcome to Valhalla!
        </Ghost>
      </h1>
      <p>
        <Ghost
          loading={boolean('Loading', true)}
          length={number('Published Length', 20, lengthOptions)}
        >
          Published: <time pubdate="pubdate">2020-10-09</time>
        </Ghost>
      </p>
    </header>
    <p>
      <Ghost
        loading={boolean('Loading', true)}
        length={number('Paragraph Length', 189, lengthOptions)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor id voluptas asperiores
        nihil vero totam aut eum fugiat rerum, atque deserunt natus ad autem saepe modi incidunt.
        At, placeat!
      </Ghost>
    </p>
    <p>
      <Ghost loading={boolean('Loading', true)} length={number('Author Length', 20, lengthOptions)}>
        Author: <a href="#">Lorem ipsum</a>
      </Ghost>
    </p>
  </article>
));
