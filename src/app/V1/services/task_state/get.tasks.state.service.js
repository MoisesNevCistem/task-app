//* Importación de casos de uso
const { taskStateUsesCases } = require('../../use_cases');

module.exports = ( models ) =>{
    //? Centralización de casos de uso
    const caseRepository = {
        getTasksState: taskStateUsesCases.getTasksStateCase(models),
    };

    /**
     * Servicio que validará los casos de uso de obtener tareas.
     * @returns Resolución de servicio ob tareas.
     */
    const getTasksStateService = async( ) => {
        //? Obtener tareas
        const tasksState = await caseRepository.getTasksState();
        return { 
            success: true,
            tasksState
        };
    };
    return getTasksStateService;
};