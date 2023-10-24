/**
 * Devuelve una respuesta de error genérica.
 * @param {object} config Define la configuración de la respuesta.
 * @param {number} config.status_code - Código de Estado HTTP.
 * @param {string} config.code - Código interno de error.
 * @param {string} config.message - Descripción del error.
 * @returns {object} Respuesta de error.
 */
const responseError = ( config ) => {
    return {
        success: false,
        status_code: config.status_code,
        error: {
            code: config.code,
            message: config.message
        }
    };
}
/**
 * Devuelve una respuesta de error con la descripción del stack.
 * @param {string} stack - Información detallada del error.
 * @param {object} config - Define la configuración de la respuesta.
 * @param {number} config.status_code - Código de Estado HTTP.
 * @param {string} config.code - Código interno de error.
 * @param {string} config.message - Descripción del error.
 * @returns {object} Respuesta de error.
 */
const responseErrorWithStack = ( stack, config ) => {
    const { NODE_ENV } = process.env;
    const showStack = NODE_ENV === 'production' ? 'Stack disponible solo en el ambiente de desarrollo' : stack;
    return {
        success: false,
        status_code: config.status_code,
        error: {
            code: config.code,
            message: config.message,
            stack: showStack
        }
    };
}
/**
 * Devuelve una respuesta éxitosa del flujo de solicitud.
 * @param {object} res - Definición de la respuesta capturada.
 * @param {object} config - Define la configuración de la respuesta.
 * @param {number} config.status_code - Define el código de estado de la respuesta.
 * @param {*} config.data - Define el contenido a retornar en la respuesta.
 */
const responseSuccess = ( res, config ) => {
    res.status( config.status_code ),
    res.json({
        success: true,
        status_code: config.status_code ,
        response: config.data
    });
    res.end();
}
/**
 * Devuelve una respuesta de éxito en casos de uso.
 * @param {object} config Define la configuración de la respuesta.
 * @param {number} config.status_code - Código de Estado HTTP.
 * @param {string} config.code - Código interno de error.
 * @param {string} config.message - Descripción del error.
 * @returns {object} Respuesta de error.
 */
const responseOK = ( config ) => {
    return {
        success: true,
        status_code: config.status_code,
        response: {
            code: config.code,
            message: config.message
        }
    };
}

module.exports = {
    responseError, 
    responseErrorWithStack,
    responseOK,
    responseSuccess
}