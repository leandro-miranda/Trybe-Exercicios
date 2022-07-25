import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar as moveCarAction } from './redux/actions';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img
          className={ redCar ? 'car-right' : 'car-left' }
          src={ carRed }
          alt="red car"
        />
        <button
          onClick={ () => moveCar('red', !redCar) }
          type="button"
        >
          move
        </button>
      </div>
      <div>
        <img
          className={ blueCar ? 'car-right' : 'car-left' }
          src={ carBlue }
          alt="blue car"
        />
        <button
          onClick={ () => moveCar('blue', !blueCar) }
          type="button"
        >
          move
        </button>
      </div>
      <div>
        <img
          className={ yellowCar ? 'car-right' : 'car-left' }
          src={ carYellow }
          alt="yellow car"
        />
        <button
          onClick={ () => moveCar('yellow', !yellowCar) }
          type="button"
        >
          move
        </button>
      </div>
    </div>
  );
}

Cars.propTypes = {
  redCar: PropTypes.bool.isRequired,
  blueCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
  moveCar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  redCar: state.carReducer.cars.red,
  blueCar: state.carReducer.cars.blue,
  yellonCar: state.carReducer.cars.yellon,
});

const mapDispatchToProps = (dispatch) => ({
  moveCar: (...payload) => dispatch(moveCarAction(...payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
