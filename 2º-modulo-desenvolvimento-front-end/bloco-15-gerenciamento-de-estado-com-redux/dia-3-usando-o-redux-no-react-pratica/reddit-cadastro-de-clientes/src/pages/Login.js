import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/actions';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    const {dispatchLogin, history} = this.props;

    dispatchLogin({email, password});
    history.push('/costumers');
  };
  
  render() {
    const {email, password} = this.state;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder='email'
          value={email}
          name='email'
          onChange={this.handleChange}
          />
          <input t
          type="text"
          placeholder='senha'
          value={password}
          name='password'
          onChange={this.handleChange}     
          />
          <button type='submit'>
          Entre
          </button>
         </form>
      </div>
    )
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const matDispatchToProps = (dispatch) => ({
  dispatchLogin: (userData) => dispatch(login(userData))
})

connect(null, matDispatchToProps)(Login);