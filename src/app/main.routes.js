//* Importaciones globales
const { Router } = require('express');

/**
 * @type {Express} Enrutador principal del ambien 'app'.
 */
const appRouter = Router();

/**
 * @type {string} URL base para construcción del servicio.
 */
const PATH_URL = '/api/v1/app';

//* Servicios de server APP
appRouter.get(`${ PATH_URL }`, ( req,res ) => {
    res.status(200);
    res.json({
        message: 'Hello app....'
    });
    res.end();
});

module.exports = { appRouter };