import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

Ghost.propTypes = {
  length: PropTypes.number,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  variate: PropTypes.bool,
};

export default Ghost;
