import React, { Component } from 'react'

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas',
  'São Paulo', 'Ceará', 'Distrito Federal'];

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
};

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE;
}

  changeHandle = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          Nome: 
          <input
            type='name'
            name='name'
            maxLength='40'
            required
            onChange={this.changeHandle}
          />
        </div>
        <div className="container">
          Email:
          <input
            type='email'
            name='email'
            maxLength='50'
            required
            onChange={this.changeHandle}
          />
        </div>
        <div className="container">
          CPF:
          <input
            type='text'
            name='cpf'
            maxLength='11'
            required
            onChange={this.changeHandle}
          />
        </div>
        <div className="container">
          Endereço:
          <input
            type='text'
            name='address'
            maxLength='200'
            required
            onChange={this.changeHandle}
          />
        </div>
        <div className="container">
          Cidade:
          <input 
            type='text'
            name='city'
            maxLength='28'
            required
            onBlur={() => {}}
            onChange={this.changeHandle}
          />
        </div>
        <div className="container">
          Estado:
          <select
            name='countryState'
            required
            onChange={this.changeHandle}
            defaultValue=''
          >
            <option value="Selecione"></option>
            {
              states.map((value, key) => (
                <option key={key}>{value }</option>
              ))
            }
          </select>
        </div>
        <div className="container">
          <label htmlFor='house'>
            <input
              type='radio'
              id='house'
              name='addressType'
              value='house'
              onChange={this.changeHandle}
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input
              type='radio'
              id='apart'
              name='addressType'
              value='apart'
              onChange={this.changeHandle}
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    )
  }
}
