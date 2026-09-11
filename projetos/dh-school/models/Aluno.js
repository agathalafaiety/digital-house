module.exports = (sequelize, dataTypes) => {

const Aluno = sequelize.define('Aluno', {
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
    ano_matricula: dataTypes.INTEGER
},  {
    timestamps: false,
    tableName: 'alunos'
});

Aluno.associate = (Models) => {
    Aluno.belongsToMany(Models.Turma, {
        through: 'alunos_has_turmas',
        foreignKey: 'alunos_id',
        otherKey: 'turma_id',
        as: 'turmas',
        timestamps: false,
})
}

return Aluno;
}