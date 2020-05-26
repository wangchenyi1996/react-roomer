import React from 'react'
import PropTypes from "prop-types";
import './index.scss'

const SvgIcon = props => {
  const { iconClass } = props;
  return (
    <svg className="svg-class" aria-hidden="true">
      <use xlinkHref={"#icon-" + iconClass} />
    </svg>
  );
};

SvgIcon.propTypes = {
  // svg名字
  iconClass: PropTypes.string.isRequired,
};

export default SvgIcon;
