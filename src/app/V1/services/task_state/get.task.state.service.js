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
    };

    /**
     * Servicio que validará los casos de uso de obtener una tarea.
     * @param {string} uuidTaskState - Define el UUID de la tarea.
     * @returns Resolución de servicio de obtener una tarea.
     */
    const getTaskStateService = async( uuidTaskState ) => {

        //? Obtener tarea
        const taskState = await caseRepository.getTaskState(uuidTaskState);

        if( taskState === null ) throw new ExceptionError('TASK_STATE_NOT_FOUND');

        return { 
            success: true,
            taskState
        };
    };
    return getTaskStateService;
};