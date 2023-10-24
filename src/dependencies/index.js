//* Importación de dependencias
const { allowedOriginsCors } = require('./cors');
const httpError = require('./http_error_handler');
const httpResponses = require('./http_responses');
const { statusCode } = require('./http_status_code');
const utils = require('./utils');

module.exports = {
    allowedOriginsCors,
    httpError,
    httpResponses,
    statusCode,
    utils
};