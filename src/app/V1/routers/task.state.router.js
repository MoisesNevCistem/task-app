//* Importaciones globales
const { Router } = require('express');

//* Importación de controladortes
const { taskStateControllers } = require('../controllers');

//* Importación de reglas
const { taskRules, taskStateRules } = require('../rules')

//* Desestructuración de controladortes
const { createTaskStateController } = taskStateControllers;

//? Desestructuración de reglas
const { paramsTaskRule } = taskRules;
const { createTaskStateRule } = taskStateRules;

module.exports = (dependencies) => {

    //? Desestructuración de dependencias
    const { middlewares } = dependencies

    /**
     * @type {Router} Enrutador que coordina el servicio de tareas.
     */
    const taskRouter = Router();
    
    //* Definición de servicios
    taskRouter.post(
        '/new_task_state',                           //* Servicio API
        createTaskStateRule(middlewares),            //* Reglas
        createTaskStateController( dependencies )    //* Controlador
    );
    return taskRouter;
};