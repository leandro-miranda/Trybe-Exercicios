'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('genres',
      [
        {
          genre: 'Horror',
        },
        {
          genre: 'Fantasia',
        },
        {
          genre: 'Suspense',
        }
      ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('genres', null, {});
  }
};