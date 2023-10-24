//* Importación de dependencias
const { listErrors } = require('../list.errors');

/**
 * @class Clase que representa errores generales de la aplicación.
 */
class ExceptionError extends Error {

    /**
     * Construye un error generalizado de la aplicación.
     * @param {string} keyError - Define el tipo de error generado. 
     * @param {*} aditionalValue - Define un valor adicional para acompletar el error generado
     */
    constructor( keyError, aditionalValue = undefined ){
        super();

        //? Asignación de propiedades
        this.keyError = keyError;
        this.aditionalValue = aditionalValue;
    }


    /**
     * Obtiene un error personalizado del catalogo de errores.
     * @returns {object} Respuestade Error. 
     */
    toJSON () {
        return typeof this.aditionalValue === 'undefined'
            ? listErrors[this.keyError]()
            : listErrors[this.keyError](this.aditionalValue);
    }
}

module.exports = { ExceptionError };