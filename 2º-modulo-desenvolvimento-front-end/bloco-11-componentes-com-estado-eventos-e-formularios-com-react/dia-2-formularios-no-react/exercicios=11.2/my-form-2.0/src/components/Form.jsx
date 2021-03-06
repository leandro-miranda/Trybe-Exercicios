import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';
import FormDataDisplay from './FormDataDisplay';
import '../styles/App.css'

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
};

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE;
  }
  
  validateAddress = (address) => address.replace(/[^\w\s]/gi, '');
    
  handleChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value)
    this.setState({
      [name]: value,
    });
  }

  handleBlur = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.setState({
      [name]: value,
    });
  }

  sendForm = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    const { submitted } = this.state;
    return (
      <div>
        <form onSubmit={this.sendForm}>
          <h1>Cadastro</h1>
          <PersonalForm
            onHandleChange={this.handleChange}
            onHandleBlur={this.handleBlur}
            state={this.state}
          />
          <ProfessionalForm
            onHandleChange={this.handleChange}
            onHandleBlur={this.handleBlur}
          />
          <input type="submit" value="Enviar" />
        </form>
        {
          submitted && (<FormDataDisplay state={this.state}/>)
        }
      </div>
    );
  }
}
