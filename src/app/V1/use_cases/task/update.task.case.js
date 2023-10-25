module.exports = ( models ) => {

    //? Desestructuración de modelos
    const { Task } = models;

    /**
     * Caso de uso que actualiza una tarea.
     * @return Una tarea.
     */
    const updateTaskCase = async( uuidTask, task ) => {

        await Task.update(task, {
            where: { uuid_task: uuidTask }
        });

        return true;
    }
    return updateTaskCase;
};