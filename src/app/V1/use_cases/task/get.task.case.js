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
     * Caso de uso que obtiene una tarea.
     * @return Una tarea.
     */
    const getTaskCase = async( uuidTask ) => {
        const task = await Task.findOne({
            where: { uuid_task: uuidTask },
            attributes: excludeFields,
            include: taskStateFields
        });

        return task;
    }
    return getTaskCase;
};