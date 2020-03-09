module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define('Turma', {
      nome: DataTypes.STRING,
      ano: DataTypes.STRING,
      criacao: DataTypes.DATE,
    });
  
    return Turma;
  }