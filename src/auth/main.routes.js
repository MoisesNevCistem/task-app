//* Importaciones globales
const { Router } = require('express');

//* Importación de dependencias
const dependencies = require('../dependencies');

//* Importación de enrutadores
const { welcomeRouter } = require('./V1/routers')

/**
 * @type {Express} Enrutador principal del ambien 'auth'.
 */
const authRouter = Router();

/**
 * @type {string} URL base para construcción del servicio.
 */
const PATH_URL = '/api/v1/auth';

//* Servicios de server AUTH
authRouter.use(`${ PATH_URL }`, welcomeRouter( dependencies ));

module.exports = { authRouter };