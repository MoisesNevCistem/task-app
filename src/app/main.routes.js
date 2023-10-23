//* Importaciones globales
const { Router } = require('express');

//* Importación de dependencias
const dependencies = require('../dependencies');

//* Importación de enrutadores
const { welcomeRouter } = require('./V1/routers')

/**
 * @type {Express} Enrutador principal del ambien 'app'.
 */
const appRouter = Router();

/**
 * @type {string} URL base para construcción del servicio.
 */
const PATH_URL = '/api/v1/app';

//* Servicios de server APP
appRouter.use(`${ PATH_URL }`, welcomeRouter( dependencies ))

module.exports = { appRouter };