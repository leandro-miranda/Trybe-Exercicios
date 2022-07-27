import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerCostumer } from '../redux/actions';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleRegister = () => {
    const {name, age, email} = this.state;
    const {dispatchRegister} = this.props;

    dispatchRegister({name, age, email});
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  handleChange = (event) => {
    const {target: {name, value}} = event;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {name, age, email} = this.state;
    const {userEmail} = this.props;
    if (!userEmail) return <div>Login não efetuado!</div>
    return (
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={ name }
            name="name"
            onChange={ this.handleChange }
          />
          <input
            type="number"
            placeholder="Idade"
            value={ age }
            name="age"
            onChange={ this.handleChange }
          />
          <input
            type="text"
            placeholder="Email"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
        </div>
        <button type="button" onClick={ this.handleRegister }>
          Registrar Cliente
        </button>
        <Link to="/costumers">Ver clientes cadastrados</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.login.email});

const mapDispatchToProps = (dispatch) => ({
  dispatchRegister: (costumerData) => dispatch(registerCostumer(costumerData))});

Register.propTypes = {
  userEmail: PropTypes.string.isRequired,
  dispatchRegister: PropTypes.func.isRequired,
}

connect(mapStateToProps, mapDispatchToProps)(Register);

