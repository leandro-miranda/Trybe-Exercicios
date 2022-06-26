import React, { Component } from 'react'
import '../styles/App.css'

export default class FormDataDisplay extends Component {
  render() {
    const {
      state: {
        name, email, cpf, address, city, countryState,
        addressType, resume, role, roleDescription,
      },
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div>
          <p>{`Nome: ${name}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`CPF: ${cpf}`}</p>
          <p>{`Endereço: ${address}`}</p>
          <p>{`Cidade: ${city} - ${countryState}`}</p>
          <p>{`Tipo de Residência: ${addressType}`}</p>
        </div>

        <h3>Profissional</h3>
        <div>
          <p>{`Currículo: ${resume}`}</p>
          <p>{`Cargo: ${role}`}</p>
          <p>{`Descrição do Cargo: ${roleDescription}`}</p>
          
        </div>
      </div>
    )
  }
}
