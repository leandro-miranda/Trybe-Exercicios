import React, { Component } from 'react'

export default class ProfessionalForm extends Component {
  render() {
    return (
      <fieldset>
        <legend>Dados Profissionais:</legend>
        <div className="container">
          Resumo do Currículo:
          <textarea
            name='resume'
            maxLength='1000'
            required
            onChange={() => { }}
          />
        </div>
        <div className="container">
          Cargo:
          <input
            type="text"
            name='role'
            maxLength='40'
            required
            onChange={() => { }}
            onMouseEnter={() => {
              global.alert('Preencha com cuidado esta informação.');
            }}
          />
        </div>
        <div className="container">
          Descrição do cargo:
          <textarea
            name='roleDescription'
            maxLength='500'
            onChange={() => { }}
          />
        </div>
      </fieldset>
    );
  }
}
