module.exports = ( models ) => {

    //? Desestructuración de modelos
    const { Task, TaskState } = models;

    const taskStateFields = {
        model: TaskState,
        attributes: ['task_state_id','task_status']
    };

    const excludeFields = {
        exclude: ['task_state_id']
    };

    /**
     * Caso de uso que obtiene todas las tareas.
     * @return Lista de tareas.
     */
    const getTasksCase = async() => {
        const tasks = await Task.findAll({
            attributes: excludeFields,
            include: taskStateFields
        });

        return tasks;
    }
    return getTasksCase;
};