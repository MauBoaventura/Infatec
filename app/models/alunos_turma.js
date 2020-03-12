module.exports = (sequelize, DataTypes) => {
    const Aluno_turma = sequelize.define('Aluno_turma', {
        id_aluno: DataTypes.INTEGER,
        id_turma: DataTypes.INTEGER,
    });
    return Aluno_turma;
  }