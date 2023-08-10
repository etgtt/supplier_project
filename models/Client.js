const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Client = connection.define('clients',{
    supplier: {
    type: Sequelize.STRING,
    allowNull: false
    },
    product: {
    type: Sequelize.STRING,
    allowNull: false
    },
    price: {
    type: Sequelize.STRING,
    allowNull: false
    },   
    stock: {
    type: Sequelize.STRING,
    allowNull: false
    },
    discount: {
    type: Sequelize.STRING,
    allowNull: false
    },
    deadline: {
    type: Sequelize.STRING,
    allowNull: false
    },
    discountQuantity: {
    type: Sequelize.STRING,
    allowNull: false
    }
})

Client.sync({force:false})
module.exports = Client;