module.exports = ( models ) => {
    //? Desestructuración de modelos
    const { Task } = models;

    /**
     * Caso de uso que registra una nueva tarea.
     * @param {object} newTask - Define una nueva tarea.
     * @param {object} newTask.uuid_task - Define el codigo UUID de la tarea.
     * @param {object} newTask.title - Define el titulo de una tarea.
     * @param {object} newTask.task_description - Define la descripcion de una tarea.
     * @return Tarea Creada.
     */
    const createTaskCase = async( newTask ) => {
        await Task.create( newTask );
        return true;
    }
    return createTaskCase;
};