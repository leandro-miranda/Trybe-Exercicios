import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CostumersList extends React.Component {
  render() {
    const { registers, userEmail } = this.props;

    if (!userEmail) return <div>Login não efetuado!</div>;

    if (registers.length === 0){
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    }

    return (
      <div className="container">
        <Link to="/register">Cadastre outros!</Link>
        <div className="cards-container">
          {registers.map((costumer) => (
            <div key={ costumer.id } className="card">
              <p>ID de registro: {costumer.id}</p>
              <p>Nome: {costumer.name}</p>
              <p>Idade: {costumer.age}</p>
              <p>Email: {costumer.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CostumersList.propTypes = {
  registers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  registers: state.registers,
  userEmail: state.login.email});

export default connect(mapStateToProps)(CostumersList);