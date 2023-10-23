//* Importaciones globales
const { Router } = require('express');

//* Importación de controladores
const { welcomeController } = require('../controllers')

module.exports = (dependencies) => {
    /**
     * @type {Router} Enrutador que coordina el servicion de bienvenida.
     */
    const welcomeRouter = Router();

    //* Definición de rutas
    welcomeRouter.get('/', welcomeController( dependencies ));
    return welcomeRouter
};