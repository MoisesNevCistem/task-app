//* Importación de servicios
const { taskStateServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        getTasksState: taskStateServices.getTasksStateService(models),
    };

    /**
     * Controlador que coordina el proceso de obtener tareas.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const getTasksStateController = async ( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.getTasksState();
            const { success, tasksState } = serviceResponse;
            
            if( success ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: tasksState
                });
            }
        } catch (error) {
            next( error );
        }
    };

    return getTasksStateController;
};