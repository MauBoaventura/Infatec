module.exports = (sequelize, DataTypes) => {
    const Disciplina = sequelize.define('Disciplina', {
      nome: DataTypes.STRING,
      criacao: DataTypes.DATE,
    });
  
    return Disciplina;
  }