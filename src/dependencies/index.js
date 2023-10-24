//* Importación de dependencias
const { allowedOriginsCors } = require('./cors')
const httpResponses = require('./http_responses');
const { statusCode } = require('./http_status_code');
const utils = require('./utils');

module.exports = {
    allowedOriginsCors,
    httpResponses,
    statusCode,
    utils
};