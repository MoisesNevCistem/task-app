//* Importación de casos de uso
const { taskUsesCases } = require('../../use_cases');

module.exports = ( dependencies ) =>{

    //? Desestructuración de dependencias
    const { httpError, models } = dependencies;

    //? Desestructuración de propiedades
    const { ExceptionError } = httpError;

    //? Centralización de casos de uso
    const caseRepository = {
        getTasks: taskUsesCases.getOneTaskCase(models),
        deleteTask: taskUsesCases.deleteTaskCase(models)
    };

    /**
     * Servicio que validará los casos de uso de eliminar una tarea.
     * @param {string} uuidTask - Define el UUID de la tarea.
     * @returns Resolución de servicio de eliminar una tarea.
     */
    const deleteTaskService = async( uuidTask ) => {

        //? Obtener tarea
        const task = await caseRepository.getTasks(uuidTask);

        if( task === null ) throw new ExceptionError('TASK_NOT_FOUND');

        //? Eliminar tarea
        await caseRepository.deleteTask( uuidTask );

        return true;
    };
    return deleteTaskService;
};