//* Importaciones globales
const { validationResult } = require('express-validator');

//* Importación dependencias
const { ExceptionError } = require('../../http_error_handler');

const validateResult = ( req, res, next ) => {
    const errors = validationResult(req);

    if( !errors.isEmpty() ){
        const firstError = errors.array()[0];
        return next( new ExceptionError('VALIDATE_ERROR', firstError.msg) );
    }

    next();
}

module.exports = {validateResult};