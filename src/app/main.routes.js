//* Importaciones globales
const { Router } = require('express');

//* Importación de dependencias
const dependencies = require('../dependencies');

//* Importación de enrutadores
const { taskRouter, taskStateRouter, welcomeRouter } = require('./V1/routers')

//* Desestructuración de dependencias
const { httpError } = dependencies;

/**
 * @type {Express} Enrutador principal del ambien 'app'.
 */
const appRouter = Router();

/**
 * @type {string} URL base para construcción del servicio.
 */
const PATH_URL = '/api/v1/app';

//* Servicios de server APP
appRouter.use(`${ PATH_URL }`, taskRouter( dependencies ));
appRouter.use(`${ PATH_URL }`, taskStateRouter( dependencies ));
appRouter.use(`${ PATH_URL }`, welcomeRouter( dependencies ));

//* Middlewares para control de errores
appRouter.use( httpError.serviceNotFound );
appRouter.use( httpError.errorCaught );

module.exports = { appRouter };