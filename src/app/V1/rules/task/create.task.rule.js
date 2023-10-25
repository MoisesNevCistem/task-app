//* Importaciones globales
const {check}  = require('express-validator');

module.exports = ( middlewares ) => {

    //? Desestructuracion de middleware
    const { validateResult } = middlewares;

    return [
        check('title')
            .trim()
            .notEmpty().withMessage("The field 'Title' is required....")
            .isString().withMessage("The field 'Title' is no valid....")
            .isLength({ max: 30 }).withMessage("The field 'Title' required max 30 characters")
            .isLength({ min: 5 }).withMessage("The field 'Title' required min 5 characters"),

        check('task_description')
            .trim()
            .notEmpty().withMessage("The field 'Description' is required....")
            .isString().withMessage("The field 'Description' is no valid....")
            .isLength({ max: 255 }).withMessage("The field 'Description' required max 255 characters")
            .isLength({ min: 5 }).withMessage("The field 'Description' required min 5 characters"),

        validateResult
    ];
};