//* Importación de casos de uso
const { taskStateUsesCases } = require('../../use_cases');

module.exports = ( dependencies ) =>{

    //? Desestructuración de dependencias
    const { httpError, models } = dependencies;

    //? Desestructuración de propiedades
    const { ExceptionError } = httpError;

    //? Centralización de casos de uso
    const caseRepository = {
        getTaskState: taskStateUsesCases.getTasksStateCase(models),
        updateTaskState: taskStateUsesCases.updateTaskStateCase(models),
    };

    /**
     * Servicio que validará los casos de uso para actualizar una tarea.
     * @param {string} uuidTask - Define el UUID de la tarea.
     * @param {object} task - Define una tarea.
     * @returns Resolución de servicio para actualizar una tarea.
     */
    const updateTaskStateService = async( uuidTask, taskToUpdate ) => {

        //? Verifica que la tarea exista tarea
        const task = await caseRepository.getTaskState(uuidTask);

        if( task === null ) throw new ExceptionError('TASK_STATE_NOT_FOUND');

        //? Actualizar tarea
        await caseRepository.updateTaskState(uuidTask, taskToUpdate);
        
        return { 
            success: true,
            task
        };
    };
    return updateTaskStateService;
};