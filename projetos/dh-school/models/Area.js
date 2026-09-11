module.exports = (sequelize, dataTypes) => {

const Area = sequelize.define('Area', {
    id: {
        type: dataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: dataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'areas'
});

Area.associate = (Models) => {
    Area.hasMany(Models.Curso, {
        foreignKey: 'area_id',
        as: 'cursos'
    });
}

return Area;
}