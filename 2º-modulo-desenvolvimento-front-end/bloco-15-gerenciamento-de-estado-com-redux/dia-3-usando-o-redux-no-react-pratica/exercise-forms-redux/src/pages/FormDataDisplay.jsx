import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { personalData, profissionalData } = this.props;
    console.log(personalData);
    const { name,
      email,
      cpf,
      address,
      city,
      uf,
    } = personalData;
    const { curriculum,
      job,
      description } = profissionalData;

    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  personalData: store.reducerPersonal.personalData,
  profissionalData: store.reducerProfissional.profissionalData,
});

FormDataDisplay.propTypes = {
  personalData: PropTypes.objectOf(String).isRequired,
  profissionalData: PropTypes.objectOf(String).isRequired,

};

export default connect(mapStateToProps, null)(FormDataDisplay);
