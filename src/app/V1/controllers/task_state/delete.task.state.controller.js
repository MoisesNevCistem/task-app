//* Importación de servicios
const { taskStateServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpError, httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        deleteTaskState: taskStateServices.deleteTaskStateService({ httpError, models }),
    };

    /**
     * Controlador que coordina el proceso de eliminar una tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const deleteTaskStateController = async ( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.deleteTaskState( req.params.uuid_validate );
            
            if( serviceResponse ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: {message: '❌ The Task was deleted....'}
                });
            }
        } catch (error) {
            next( error );
        }
    };

    return deleteTaskStateController;
};