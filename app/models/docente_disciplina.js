module.exports = (sequelize, DataTypes) => {
    const Docente_disciplina = sequelize.define('Docente_disciplina', {
        id_docente: DataTypes.INTEGER,
        id_disciplina: DataTypes.INTEGER,
    });
    return Docente_disciplina;
}