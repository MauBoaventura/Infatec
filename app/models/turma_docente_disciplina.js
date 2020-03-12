module.exports = (sequelize, DataTypes) => {
  const Turma_docente_disciplina = sequelize.define('Turma_docente_disciplina', {
    id_turma: DataTypes.INTEGER,
    id_docente: DataTypes.INTEGER,
    id_disciplina: DataTypes.INTEGER
  });
  return Turma_docente_disciplina;
}