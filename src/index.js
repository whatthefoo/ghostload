import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PreloaderComponent = ({ loading, length, children, ...props }) => (
  <Fragment>
    {loading ? (
      <span className="ghost">{'n'.repeat(length)}</span>
    ) : (
      <Fragment>{children}</Fragment>
    )}
  </Fragment>
);

PreloaderComponent.defaultProps = {
  loading: true,
  length: 15,
  fullWidth: false,
  height: '',
  width: '',
  borderRadius: '',
};

PreloaderComponent.propTypes = {
  length: PropTypes.number,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default PreloaderComponent;
