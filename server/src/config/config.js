require('dotenv').config();
data = {
    database:process.env.DB_DATABASE,
    username:process.env.DB_USER,
    password:"",
    host:process.env.DB_HOST
};

module.exports = data;