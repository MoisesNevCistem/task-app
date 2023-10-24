//* Importaciones globales
const { Router } = require('express');

//* Importación de controladortes
const { taskControllers } = require('../controllers');

//* Desestructuración de controladortes
const { createTaskController } = taskControllers;

module.exports = (dependencies) => {
    /**
     * @type {Router} Enrutador que coordina el servicio de tareas.
     */
    const taskRouter = Router();
    
    //* Definición de servicios
    taskRouter.post('/new_task', createTaskController( dependencies ));

    return taskRouter;
};