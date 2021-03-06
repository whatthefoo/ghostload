import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Ghost from '../src';

import './patterns.css';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const lengthOptions = {
  range: true,
  min: 1,
  max: 300,
  step: 1,
};

stories.add('Cards', () => (
  <section className="cards">
    {[...Array(6)].map((_, i) => (
      <article className="card" key={i}>
        <header className="card__header">
          <img
            className="card__image"
            src="https://picsum.photos/300/300/?blur"
            alt="placeholder"
          />
          <h2>
            <Ghost loading={boolean('Loading', true)} length={20}>
              Welcome to Valhalla!
            </Ghost>
          </h2>
        </header>
        <div className="card__body">
          <p>
            <Ghost loading={boolean('Loading', true)} length={80}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor id voluptas.
            </Ghost>
          </p>
        </div>

        <footer className="card__footer">
          <p>
            <Ghost loading={boolean('Loading', true)} length={12}>
              Lorem ipsum
            </Ghost>
          </p>
        </footer>
      </article>
    ))}
  </section>
));

stories.add('List', () => (
  <section className="list">
    {[...Array(6)].map((_, i) => (
      <article className="list-item" key={i}>
        <div
          className="list-item__media"
          style={{
            background: boolean('Loading', true)
              ? ''
              : "url('https://picsum.photos/140/140/?blur')",
          }}
        />
        <div className="list-item__body">
          <h2 className="list-item__title">
            <Ghost loading={boolean('Loading', true)} length={9}>
              Card Title
            </Ghost>
          </h2>
          <div className="list-item__description">
            <p>
              <Ghost
                loading={boolean('Loading', true)}
                length={number('Description Length', 80, lengthOptions)}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor id voluptas.
              </Ghost>
            </p>
          </div>
          <div className="list-item__meta">
            <p>
              <Ghost loading={boolean('Loading', true)} length={12}>
                Lorem ipsum
              </Ghost>
            </p>
          </div>
        </div>
      </article>
    ))}
  </section>
));
