module.exports = ( models ) => {

    //? Desestructuración de modelos
    const { TaskState } = models;

    /**
     * Caso de uso que eliminar una tarea.
     * @return Una tarea.
     */
    const deleteTaskStateCase = async( uuidTaskState ) => {
        await TaskState.destroy({ where: { uuid_task_state: uuidTaskState } });
        return true;
    }
    return deleteTaskStateCase;
};