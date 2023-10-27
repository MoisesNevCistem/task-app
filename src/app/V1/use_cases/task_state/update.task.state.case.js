module.exports = ( models ) => {

    //? Desestructuración de modelos
    const { TaskState } = models;

    /**
     * Caso de uso que actualiza una tarea.
     * @return Una tarea.
     */
    const updateTaskCase = async( uuidTaskState, taskState ) => {

        await TaskState.update(taskState, {
            where: { uuid_task_state: uuidTaskState }
        });

        return true;
    }
    return updateTaskCase;
};