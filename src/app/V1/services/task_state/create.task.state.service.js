//* Importación de casos de uso
const { taskStateUsesCases } = require('../../use_cases');

module.exports = ( dependencies ) =>{

    //? Desestructuración de dependencias
    const { generateUUID, models } = dependencies;

    //? Centralización de casos de uso
    const casesRepository = {
        createTaskState: taskStateUsesCases.createTaskStateCase(models),
    };

    /**
     * Servicio que validará los casos de uso de crear tarea.
     * @param {object} payload - Define la tarea a crear.
     * @param {string} payload.title - Define el título de la tarea.
     * @param {string} payload.description - Define la descripción de la tarea.
     * @returns Resolución de servicio crear tareas.
     */
    const createTaskStateService = async( taskState ) => {
        //? Generación de código UUID
        const taskUUID = generateUUID();

        const taskCreated = await casesRepository.createTaskState({
            task_status: taskState.task_status,
            uuid_task_state: taskUUID
        });

        console.log('CREATE_TASK_STATE_SERVICE:', { taskState, taskUUID });

        return taskCreated;
    };
    return createTaskStateService;
};