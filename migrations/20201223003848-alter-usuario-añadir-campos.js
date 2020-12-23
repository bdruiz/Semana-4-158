'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        'Usuarios',
        'tipo_documento',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Usuarios',
        'num_documento',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Usuarios',
        'direccion',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Usuarios',
        'telefono',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ]
    )


  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Usuarios', 'tipo_documento'),
      queryInterface.removeColumn('Usuarios', 'num_documento'),
      queryInterface.removeColumn('Usuarios', 'direccion'),
      queryInterface.removeColumn('Usuarios', 'telefono')
    ]);
  }
};
