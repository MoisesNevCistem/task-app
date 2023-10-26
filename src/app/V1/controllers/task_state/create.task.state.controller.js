//* Importación de servicios
const { taskStateServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { generateUUID, httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        createTaskState: taskStateServices.createTaskStateService({ generateUUID, models }),
    };

    /**
     * Controlador que coordina el proceso de crear una tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const createTaskStateController = async( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.createTaskState( req.body );

            if( serviceResponse ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.CREATED,
                    data: {
                        message: 'The new task created with successfuly 💯',
                    }
                });
            }
        } catch (error) {
            next( error );
        }
    }
    return createTaskStateController;
};