import PropTypes from 'prop-types';

export const PROP_TYPES = {
  className: PropTypes.string,
  handleClose: PropTypes.func.isRquired,
  isVisible: PropTypes.bool,
};

export default PROP_TYPES;