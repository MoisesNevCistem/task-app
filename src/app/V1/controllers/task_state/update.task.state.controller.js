//* Importación de servicios
const { taskStateServices } = require('../../services');

module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpError, httpResponses, statusCode, models } = dependencies;

    //? Centralización de servicios
    const serviceRepository = {
        updateStateTask: taskStateServices.updateTaskStateService({ httpError, models }),
    };

    /**
     * Controlador que coordina el proceso de actualizar una tarea.
     * @param {*} req - Deinificón de la solicitud realizada.
     * @param {*} res - Definición de la respuesta capturada.
     * @param {*} next - Función que continua el flujo de la aplicación.
     */
    const updateTaskStateController = async ( req, res, next ) => {
        try {
            const serviceResponse = await serviceRepository.updateStateTask( req.params.uuid_validate, req.body );

            if( serviceResponse ){
                httpResponses.responseSuccess(res, {
                    status_code: statusCode.OK,
                    data: { message: '✔ Task State was updated....' }
                });
            }
        } catch (error) {
            next( error );
        }
    };

    return updateTaskStateController;
};