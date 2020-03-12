module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Docente_disciplinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_docente: {
        type: DataTypes.INTEGER
      },
      id_disciplina: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Docente_disciplinas');
  }
};