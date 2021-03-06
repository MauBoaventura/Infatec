module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('aluno_turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_aluno: {
        type: DataTypes.INTEGER
      },
      id_turma: {
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
    return queryInterface.dropTable('aluno_turmas');
  }
};