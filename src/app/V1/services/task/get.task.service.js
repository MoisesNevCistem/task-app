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
    };

    /**
     * Servicio que validará los casos de uso de obtener una tarea.
     * @returns Resolución de servicio de obtener una tarea.
     */
    const getTaskService = async( uuidTask ) => {

        // //? Obtener tarea
        const task = await caseRepository.getTasks(uuidTask);

        if( task === null ) throw new ExceptionError('TASK_NOT_FOUND');

        return { 
            success: true,
            task
        };
    };
    return getTaskService;
};