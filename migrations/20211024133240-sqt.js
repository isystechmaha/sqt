'use strict';

module.exports = {

  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {

    await queryInterface.sequelize.query(
      'create sequence "PostsIdSeq" start 1 increment 1'
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {

    await queryInterface.sequelize.query(
      'drop sequence "PostsIdSeq"'
    );
  }
};
