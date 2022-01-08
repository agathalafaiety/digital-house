//const Sequelize = require('sequelize');
//const sequelize = new Sequelize('escola', 'root', '', {dialect: 'mysql', host: 'localhost'});

//module.exports = sequelize;

const config = {
    username: 'root',
    password: '',
    database: 'escola',
    host: 'localhost',
    dialect: 'mysql',
    use_env_variable: false
}

module.exports = config