import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteCostumer } from '../actions';

class CostumersList extends React.Component {
  state = {
    isSortedByName: false,
  };

  handleSortBtnClick = () => {
    this.setState((prevState) => ({
      isSortedByName: !prevState.isSortedByName,
    }));
  };

  getSortedRegisters = () => {
    const { isSortedByName } = this.state;
    const { registers } = this.props;
    if (isSortedByName) {
      const registersCopy = [...registers];
      registersCopy.sort((a, b) => a.name.localeCompare(b.name));
      return registersCopy;
    }
    return registers;
  };

  render() {
    const { userEmail, dispatchDelete, registers } = this.props;

    if (!userEmail) return <div>Login não efetuado!</div>;

    if (registers.length === 0){
      return (
        <div className="container">
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    }

    return (
      <div className="container">
        <Link to="/register">Cadastre outros!</Link>
        <button type="button" onClick={ this.handleSortBtnClick }>
          Ordenar pelo nome
        </button>
        <div className="cards-container">
          {this.getSortedRegisters().map((costumer) => (
            <div key={ costumer.email } className="card">
              <p>ID de registro: {costumer.id}</p>
              <p>Nome: {costumer.name}</p>
              <p>Idade: {costumer.age}</p>
              <p>Email: {costumer.email}</p>
              <button
                type="button"
                className="danger"
                onClick={ () => dispatchDelete(costumer.id) }
              >
                X
              </button>
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
  dispatchDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  registers: state.registers,
  userEmail: state.login.email});

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (costumerId) => dispatch(deleteCostumer(costumerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CostumersList);