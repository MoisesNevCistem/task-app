//* Importación de servicios
const { taskServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { generateUUID, httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        createTask: taskServices.createTaskService({ generateUUID, models }),
    };

    /**
     * Controlador que coordina el proceso de crear una tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const createTaskController = async( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.createTask( req.body );

            if( serviceResponse ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.CREATED,
                    data: {
                        message: 'The new task created with successfuly 💯',
                    }
                });
            }
        } catch (error) {
            // console.log('❌ CREATE_TASK_CONTROLLER_ERROR: ', error);
            next( error );
        }
    }
    return createTaskController;
};