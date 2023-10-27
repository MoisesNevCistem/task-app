module.exports = ( models ) => {

    //? Desestructuración de modelos
    const { TaskState } = models;

    /**
     * Caso de uso que obtiene todas las tareas.
     * @return Lista de tareas.
     */
    const getTasksStateCase = async() => {
        const tasksState = await TaskState.findAll({ });
        
        return tasksState;
    }
    return getTasksStateCase;
};