//* Importación de dependencias
const { responseError, responseErrorWithStack, responseOK } = require('../http_responses');
const { statusCode } = require('../http_status_code')

/**
 * @constant Catalago de errores de la aplicación
 */
const listErrors = {
    INTERNAL_SERVER_ERROR( stack ) {
        return responseErrorWithStack( stack, {
            code: 'B01',
            message: 'Ops, we get problems with the server, try again....',
            status_code: statusCode.INTERNAL_SERVER_ERROR
        });
    },
    SERVICE_NOT_FOUND( url ){
        return responseError({
            code: 'B02',
            message: `The services '${ url }' is not available`,
            status_code: statusCode.NOT_FOUND
        })
    },
    VALIDATE_ERROR( error ){
        return responseError({
            code: 'B03',
            message: error,
            status_code: statusCode.BAD_REQUEST
        })
    }
}

module.exports = { listErrors };