//* Importaciones globales
const {check}  = require('express-validator');
const { UUID } = require('sequelize');
const { v4 } = require('uuid');

module.exports = ( middlewares ) => { 
    //? Desestructuracion de middlewares
    const { validateResult } = middlewares;

    return[
        check('uuid_validate')
        .notEmpty().withMessage("The field 'UUID Task' is required....")
        .isUUID('4').withMessage("The field 'UUID Task' is not validate...."),
        validateResult
    ];
};