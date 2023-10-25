//* Importación de casos de uso
const { taskUsesCases } = require('../../use_cases');

module.exports = ( models ) =>{
    //? Centralización de casos de uso
    const caseRepository = {
        getTasks: taskUsesCases.getTaskCase(models),
    };

    /**
     * Servicio que validará los casos de uso de obtener tareas.
     * @returns Resolución de servicio ob tareas.
     */
    const getTaskService = async( ) => {
        //? Obtener tareas
        const tasks = await caseRepository.getTasks();

        return { 
            success: true,
            tasks
        };
    };
    return getTaskService;
};