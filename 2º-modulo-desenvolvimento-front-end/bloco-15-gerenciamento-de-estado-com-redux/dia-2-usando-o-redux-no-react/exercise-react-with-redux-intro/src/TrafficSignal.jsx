import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal as changeSignalAction } from './redux/actions';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellon') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button onClick={ () => changeSignal('red') } type="button">Red</button>
        <button onClick={ () => changeSignal('yellon') } type="button">Yellow</button>
        <button onClick={ () => changeSignal('green') } type="button">Green</button>
      </div>
      <img className="signal" src={ renderSignal(signalColor) } alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.trafficReducer.signal.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (...payload) => dispatch(changeSignalAction(...payload)),
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string.isRequired,
  changeSignal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
