module.exports = (sequelize, DataTypes) => {
    const Docente_disciplina = sequelize.define('docente_disciplina', {
        id_docente: DataTypes.INTEGER,
        id_disciplina: DataTypes.INTEGER,
    });
    return Docente_disciplina;
}