module.exports = (sequelize, dataTypes) => {

const Curso = sequelize.define('Curso', {
    id: {
        type: dataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: dataTypes.STRING,
        allowNull: false
    },
    area_id: dataTypes.INTEGER,
}, {
    timestamps: false,
    tableName: 'cursos'
});

Curso.associate = (Models) => {
    Curso.belongsTo(Models.Area, {
        foreignKey: 'area_id',
        as: 'area'
    })
}

return Curso;
}