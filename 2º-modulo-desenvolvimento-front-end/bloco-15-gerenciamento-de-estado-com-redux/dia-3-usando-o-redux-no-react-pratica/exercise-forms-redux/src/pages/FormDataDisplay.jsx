import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const { personalData: { name, email, cpf, address, city, uf } } = this.props;
    const { professionalData: { curriculum, job, description } } = this.props;
    return (
      <div className="DataDisplay--span">
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
        <button type="button">CONFIRMAR</button>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  personalData: store.personalDataReducer.personalData,
  professionalData: store.professionalDataReducer.professionalData,
});

FormDataDisplay.propTypes = {
  personalData: PropTypes.objectOf(PropTypes.string).isRequired,
  professionalData: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps)(FormDataDisplay);
