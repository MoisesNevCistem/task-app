module.exports = ( models ) => {

    //? Desestructuración de modelos
    const { TaskState } = models;

    /**
     * Caso de uso que obtiene una tarea.
     * @return Una tarea.
     */
    const getTaskStateCase = async( uuidTaskState ) => {
        const taskState = await TaskState.findOne({
            where: { uuid_task_state: uuidTaskState }
        });

        return taskState;
    }
    return getTaskStateCase;
};