const Sequelize = require('sequelize');
const db = require('./db');

const Professor = db.define('professor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: { 
        type: Sequelize.STRING,
        allowNull: false,
    },

    materia: { 
        type: Sequelize.STRING,
        allowNull: false,
    }
});


//Criar a tabela
Professor.sync();
//Verificar se há alguma diferença na tabela, realiza a alteração
Professor.sync({ alter: true })

module.exports = Professor;