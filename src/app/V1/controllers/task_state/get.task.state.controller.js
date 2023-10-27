//* Importación de servicios
const { taskStateServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpError, httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        getTaskState: taskStateServices.getTaskStateService({ httpError, models }),
    };

    /**
     * Controlador que coordina el proceso de obtener una tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const getTaskStateController = async ( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.getTaskState( req.params.uuid_validate );
            const { success, taskState } = serviceResponse;
            
            if( success ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: taskState || {}
                });
            }
        } catch (error) {
            next( error );
        }
    };

    return getTaskStateController;
};