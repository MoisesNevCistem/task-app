//* Importaciones globales
const { Sequelize } = require('sequelize');

//? Desestructuración de variables de entorno
const {
    DB_HOST, DB_USER, DB_PWD,
    DB_NAME, DB_PORT, DB_ENCRYPT,
    DB_LOGS
} = process.env;
/**
* Instancia de conexión a base de datos.
* @param {String} DB_HOST - Define el nombre de host que alberga la base de datos.
* @param {String} DB_USER - Define el nombre de usuario para acceder a la base de datos.
* @param {String} DB_PWD - Define la contraseña de acceso a la base de datos.
* @param {String} DB_NAME - Define el nombre de la base de datos.
* @param {String} DB_PORT - Define el puerto de despliegue de la base de datos.
* @param {String} DB_ENCRYPT - Habilita el cifrado de la conexión a base de datos.
* @param {String} DB_LOGS - Habilita los logs de consultas a BD.
*/
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: DB_PORT,
    logging: Boolean( DB_LOGS ),
    dialectOptions: {
        //? Desactivar el cifrado de la conexión
        ssl: Boolean( DB_ENCRYPT )
    }
});
module.exports = { sequelize };