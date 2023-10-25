//* Importación de servicios
const { taskServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpError, httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        deleteTask: taskServices.deleteTaskService({ httpError, models }),
    };

    /**
     * Controlador que coordina el proceso de eliminar una tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const deleteTaskController = async ( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.deleteTask( req.params.uuid_task );
            
            if( serviceResponse ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: {message: '❌ The Task was deleted....'}
                });
            }
        } catch (error) {
            // console.log('❌ GET_TASK_CONTROLLER_ERROR: ', error);
            next( error );
        }
    };

    return deleteTaskController;
};