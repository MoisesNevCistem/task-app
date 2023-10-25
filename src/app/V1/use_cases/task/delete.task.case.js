module.exports = ( models ) => {

    //? Desestructuración de modelos
    const { Task } = models;

    /**
     * Caso de uso que eliminar una tarea.
     * @return Una tarea.
     */
    const deleteTaskCase = async( uuidTask ) => {
        await Task.destroy({ where: { uuid_task: uuidTask } });
        return true;
    }
    return deleteTaskCase;
};