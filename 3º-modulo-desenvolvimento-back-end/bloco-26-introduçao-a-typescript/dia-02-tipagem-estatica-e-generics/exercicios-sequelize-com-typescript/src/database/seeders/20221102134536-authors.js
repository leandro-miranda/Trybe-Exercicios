'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('authors',
      [
        {
          name: 'Dan Brown',
        },
        {
          name: 'Stephen King',
        },
        {
          name: 'J. K. Rowling',
        }
      ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('authors', null, {});
  }
};
