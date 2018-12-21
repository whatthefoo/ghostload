import React, { Fragment } from 'react';
import { buildWordString, buildClassName } from './utils';

import './styles.css';

const Ghost = ({ loading, length, children, variate, ...props }) => (
  <span className={buildClassName(props)}>
    {loading ? (
      <span className="ghost__line">{buildWordString(length, variate)}</span>
    ) : (
      <Fragment>{children}</Fragment>
    )}
  </span>
);

Ghost.defaultProps = {
  loading: true,
  length: 15,
  fullWidth: false,
  variate: false,
};

export default Ghost;
