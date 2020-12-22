'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Articulos', 
        'imagenurl', 
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )]
    )
  
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Articulos', 'urlimagen')
    ]);

  }
};
