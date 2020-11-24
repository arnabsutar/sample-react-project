import React from 'react';
import PropTypes from 'prop-types';
import './pageHeader.scss';

const PageHeader = ({ primaryHeading, secondaryHeading }) => (
  <div align="left">
    <span className="page-header-primary">{primaryHeading}</span>
    &nbsp;
    {secondaryHeading}
  </div>
);

PageHeader.propTypes = {
  primaryHeading: PropTypes.string.isRequired,
  secondaryHeading: PropTypes.string,
};

PageHeader.defaultProps = {
  secondaryHeading: '',
};

export default PageHeader;
