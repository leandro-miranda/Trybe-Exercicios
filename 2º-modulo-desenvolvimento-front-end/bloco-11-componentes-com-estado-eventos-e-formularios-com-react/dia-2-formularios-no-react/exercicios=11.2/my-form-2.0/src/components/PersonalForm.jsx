import React, { Component } from 'react'

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas',
  'São Paulo', 'Ceará', 'Distrito Federal'];


export default class Form extends Component {
  render() {
    const { name, address } = this.state;
     return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          Nome: 
          <input
            type='name'
            name='name'
            maxLength='40'
            value={name}
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="container">
          Email:
          <input
            type='email'
            name='email'
            maxLength='50'
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="container">
          CPF:
          <input
            type='text'
            name='cpf'
            maxLength='11'
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="container">
          Endereço:
          <input
            type='text'
            name='address'
            maxLength='200'
             required
             value={address}
            onChange={this.handleChange}
          />
        </div>
        <div className="container">
          Cidade:
          <input 
            type='text'
            name='city'
            maxLength='28'
            required
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        </div>
        <div className="container">
          Estado:
          <select
            name='countryState'
            required
            onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input
              type='radio'
              id='apart'
              name='addressType'
              value='apart'
              onChange={this.handleChange}
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    )
  }
}
