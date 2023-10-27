//* Importación de servicios
const { taskServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpError, httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        updateTask: taskServices.updateTaskService({ httpError, models }),
    };

    /**
     * Controlador que coordina el proceso de actualizar una tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const updateTaskController = async ( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.updateTask( req.params.uuid_validate, req.body );

            if( serviceResponse ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: { message: '✔ Task was updated....' }
                });
            }
        } catch (error) {
            console.log('❌ UPDATE_TASK_CONTROLLER_ERROR: ', error);
            next( error );
        }
    };

    return updateTaskController;
};