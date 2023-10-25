//* Importaciones globales
const { Router } = require('express');

//* Importación de controladortes
const { taskControllers } = require('../controllers');

//* Importación de reglas
const { taskRules } = require('../rules')

//* Desestructuración de controladortes
const { createTaskController } = taskControllers;

//? Desestructuración de reglas
const { createTaskRule } = taskRules;

module.exports = (dependencies) => {

    //? Desestructuración de dependencias
    const { middlewares } = dependencies

    /**
     * @type {Router} Enrutador que coordina el servicio de tareas.
     */
    const taskRouter = Router();
    
    //* Definición de servicios
    taskRouter.post(
        '/new_task',                            //* Servicio API
        createTaskRule(middlewares),            //* Reglas
        createTaskController( dependencies )    //* Controlador
    );

    return taskRouter;
};