//* Importación de casos de uso
const { taskUsesCases } = require('../../use_cases');

module.exports = ( dependencies ) =>{

    //? Desestructuración de dependencias
    const { httpError, models } = dependencies;

    //? Desestructuración de propiedades
    const { ExceptionError } = httpError;

    //? Centralización de casos de uso
    const caseRepository = {
        getTask: taskUsesCases.getOneTaskCase(models),
        updateTask: taskUsesCases.updateTaskCase(models),
    };

    /**
     * Servicio que validará los casos de uso para actualizar una tarea.
     * @param {string} uuidTask - Define el UUID de la tarea.
     * @param {object} task - Define una tarea.
     * @returns Resolución de servicio para actualizar una tarea.
     */
    const updateTaskService = async( uuidTask, taskToUpdate ) => {

        //? Verifica que la tarea exista tarea
        const task = await caseRepository.getTask(uuidTask);

        if( task === null ) throw new ExceptionError('TASK_NOT_FOUND');

        //? Actualizar tarea
        await caseRepository.updateTask(uuidTask, taskToUpdate);
        
        return { 
            success: true,
            task
        };
    };
    return updateTaskService;
};