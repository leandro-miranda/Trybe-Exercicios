import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarsContext from './CarsContext';

export default class Provider extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    signal: { 
      color: 'red',
    },
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }

  changeSignal = (signalColor) => {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  }


  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    const {children} = this.props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
