module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nascimento: DataTypes.DATE,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    isDirecao: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isDocente: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isAluno: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });

  return User;
}