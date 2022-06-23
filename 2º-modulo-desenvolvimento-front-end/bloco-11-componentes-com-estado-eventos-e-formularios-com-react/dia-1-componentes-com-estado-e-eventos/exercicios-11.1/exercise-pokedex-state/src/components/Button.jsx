import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';

class Button extends React.Component {
  render() {
    const { name, func, disabled } = this.props;
    return (
      <button
        type="button"
        className="pokedex-button"
        onClick={ func }
        disabled={ disabled }
      >
        {name}

      </button>
    );
  }
}

Button.propTypes = {
  func: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
