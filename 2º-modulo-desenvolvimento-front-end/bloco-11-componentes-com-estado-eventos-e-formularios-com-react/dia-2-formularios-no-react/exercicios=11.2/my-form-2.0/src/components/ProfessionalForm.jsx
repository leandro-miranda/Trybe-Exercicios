import React, { Component } from 'react'

export default class ProfessionalForm extends Component {
  render() {
    const {onHandleChange} = this.props;
    return (
      <fieldset>
        <legend>Dados Profissionais:</legend>
        <div className="container">
          Resumo do Currículo:
          <textarea
            name='resume'
            maxLength='1000'
            required
            onChange={onHandleChange}
          />
        </div>
        <div className="container">
          Cargo:
          <input
            type="text"
            name='role'
            maxLength='40'
            required
            onChange={onHandleChange}
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
            onChange={onHandleChange}
          />
        </div>
      </fieldset>
    );
  }
}
