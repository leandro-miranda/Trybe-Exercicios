import React, { Component } from 'react'

export default class PersonalForm extends Component {
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
            onChange={() => {}}
          />
        </div>
        <div className="container">
          Email:
          <input
            type='email'
            name='email'
            maxLength='50'
            required
            onChange={() => {}}
          />
        </div>
      </fieldset>
    )
  }
}
