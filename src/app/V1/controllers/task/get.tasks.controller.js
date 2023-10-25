//* Importación de servicios
const { taskServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        getTasks: taskServices.getTasksService(models),
    };

    /**
     * Controlador que coordina el proceso de obtener tareas.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const getTaskController = async ( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.getTasks();
            const { success, tasks } = serviceResponse;
            
            if( success ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: tasks
                });
            }
        } catch (error) {
            console.log('❌ GET_TASK_CONTROLLER_ERROR: ', error);
            next( error );
        }
    };

    return getTaskController;
};