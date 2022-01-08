module.exports = (sequelize, dataTypes) => {

const Turma = sequelize.define('Turma', {
    id: {
        type: dataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    duracao: dataTypes.INTEGER,
    ano_inicio: dataTypes.INTEGER,
    semestre: dataTypes.INTEGER,
    curso_id: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    professor_id: {
        type: dataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'turmas'
});

Turma.associate = (Models) => {
    Turma.belongsTo(Models.Curso, {
        foreignKey: 'curso_id',
        as: 'curso'
    })

    Turma.belongsTo(Models.Professor, {
        foreignKey: 'professor_id',
        as: 'professor'
    })


    Turma.belongsToMany(Models.Aluno, {
        through: 'alunos_has_turmas',
        foreignKey: 'turma_id',
        otherKey: 'alunos_id',
        as: 'alunos',
        timestamps: false,
    })

}

return Turma;
}