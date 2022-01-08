module.exports = (sequelize, dataTypes) => {

const Professor = sequelize.define('Professor', {
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
    sobrenome: dataTypes.STRING,
    area_id: {
        type: dataTypes.INTEGER,
        allowNull: false
    }    
}, {
    timestamps: false,
    tableName: 'professores'
})

return Professor;
}