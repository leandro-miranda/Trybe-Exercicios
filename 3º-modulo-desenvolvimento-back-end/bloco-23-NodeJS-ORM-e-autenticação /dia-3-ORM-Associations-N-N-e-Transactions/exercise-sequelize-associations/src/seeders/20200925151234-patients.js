'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Patients',
      [
        {
          fullName: 'Alberto Dos Santos',
          plan_id: 1,
        },
        {
          fullName: 'Maria Silveira Rodrigues',
          plan_id: 3,
        },
        {
          fullName: 'Osvaldo de Andrade',
          plan_id: 3,
        },
        {
          fullName: 'Cristiano Ronaldo Messi',
          plan_id: 2,
        },
        {
          fullName: 'Luis Carlos Suarez',
          plan_id: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Patients', null, {});
  },
};
