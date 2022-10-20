'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false, // define se o campo pode ou não receber um valor null
        autoIncrement: true, // define se o campo vai ter incremento automático
        primaryKey: true, // define se o campo é uma chave primária
        type: Sequelize.INTEGER // define o tipo de campo, ex: VARCHAR, STRING, INTEGER, DATE...
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Users'); // apaga a tabela caso seja necessário desfazer a operação de execução (up)
  }
};
