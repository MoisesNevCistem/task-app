//* Importaciones globables
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

//* Importacion de dependencias
const {allowedOriginsCors} = require('./dependencies');

const runApp = ( router ) => {
    const { NODE_ENV } = process.env;

    /**
     * @type {Express} Instancia de aplicación Express
     */
    const app = express();

    if(NODE_ENV === 'development'){
        app.use( morgan('dev') );
        //NOTE: Aqui se puede configurar más middlewares....
    }
    app.use( allowedOriginsCors() );
    app.use( helmet() );
    app.use( express.json() );
    app.use( router );

    return app;
};

module.exports = {runApp};