//* Importación de casos de uso
const { taskStateUsesCases } = require('../../use_cases');

module.exports = ( dependencies ) =>{

    //? Desestructuración de dependencias
    const { httpError, models } = dependencies;

    //? Desestructuración de propiedades
    const { ExceptionError } = httpError;

    //? Centralización de casos de uso
    const caseRepository = {
        getTaskState: taskStateUsesCases.getTaskStateCase(models),
        deleteTaskState: taskStateUsesCases.deleteTaskStateCase(models)
    };

    /**
     * Servicio que validará los casos de uso de eliminar una tarea.
     * @param {string} uuidTask - Define el UUID de la tarea.
     * @returns Resolución de servicio de eliminar una tarea.
     */
    const deleteTaskStateService = async( uuidTaskState ) => {

        //? Obtener tarea
        const task = await caseRepository.getTaskState(uuidTaskState);

        if( task === null ) throw new ExceptionError('TASK_NOT_FOUND');

        //? Eliminar tarea
        await caseRepository.deleteTaskState( uuidTaskState );

        return true;
    };
    return deleteTaskStateService;
};