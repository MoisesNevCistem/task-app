//* Importaciones globales
const { Router } = require('express');

/**
 * @type {Express} Enrutador principal del ambien 'auth'.
 */
const authRouter = Router();

/**
 * @type {string} URL base para construcción del servicio.
 */
const PATH_URL = '/api/v1/auth';

//* Servicios de server AUTH
authRouter.get(`${ PATH_URL }`, ( req,res ) => {
    res.status(200);
    res.json({
        message: 'Hello auth....'
    });
    res.end();
});

module.exports = { authRouter };