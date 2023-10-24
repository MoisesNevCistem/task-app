//* Importación de errores
const { ExceptionError } = require('./errors/exception.error');
const { errorCaught, serviceNotFound } = require('./handlers');

module.exports = {
    ExceptionError,
    errorCaught,
    serviceNotFound
}