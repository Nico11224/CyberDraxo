
const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// natsuni function 
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    
};