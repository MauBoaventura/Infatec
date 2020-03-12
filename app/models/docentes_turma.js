module.exports = (sequelize, DataTypes) => {
  const Docente_turma = sequelize.define('Docente_turma', {
    id_docente: DataTypes.INTEGER,
    id_turma: DataTypes.INTEGER,
  });
  return Docente_turma;
}