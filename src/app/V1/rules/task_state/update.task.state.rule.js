//* Importaciones globales
const {check}  = require('express-validator');

module.exports = ( middlewares ) => {

    //? Desestructuracion de middleware
    const { validateResult } = middlewares;

    return [
        check('task_status')
            .trim()
            .notEmpty().withMessage("The field 'Task Status' is required....")
            .isString().withMessage("The field 'Task Status' is no valid....")
            .isLength({ max: 20 }).withMessage("The field 'Task Status' required max 30 characters")
            .isLength({ min: 1 }).withMessage("The field 'Task Status' required min 5 characters"),

        validateResult
    ];
};