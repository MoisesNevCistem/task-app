//* Importación de dependencias
const { allowedOriginsCors } = require('./cors');
const httpError = require('./http_error_handler');
const httpResponses = require('./http_responses');
const { statusCode } = require('./http_status_code');
const middlewares = require('./middlewares');
const models = require('./models');
const utils = require('./utils');

module.exports = {
    allowedOriginsCors,
    httpError,
    httpResponses,
    statusCode,
    middlewares,
    models,
    utils
};