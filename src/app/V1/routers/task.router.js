//* Importaciones globales
const { Router } = require('express');

//* Importación de controladortes
const { taskControllers } = require('../controllers');

//* Importación de reglas
const { taskRules } = require('../rules')

//* Desestructuración de controladortes
const { 
    createTaskController, getTasksController, getTaskController, updateTaskController, deleteTaskController
} = taskControllers;

//? Desestructuración de reglas
const { createTaskRule, paramsTaskRule, updateTaskRule } = taskRules;

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

    //* Definición de servicios
    taskRouter.get(
        '/tasks',                             //* Servicio API
        getTasksController( dependencies )    //* Controlador
    );

    //* Definición de servicios
    taskRouter.get(
        '/task/:uuid_validate',                   //* Servicio API
        paramsTaskRule(middlewares),          //* Reglas
        getTaskController( dependencies )     //* Controlador
    );

    //* Definición de servicios
    taskRouter.put(
        '/task/:uuid_validate',                   //* Servicio API
        [
            paramsTaskRule(middlewares),      //* Reglas params
            updateTaskRule(middlewares),      //* Reglas update
        ],      
        updateTaskController( dependencies )  //* Controlador
    );

    //* Definición de servicios
    taskRouter.delete(
        '/task/:uuid_validate',                   //* Servicio API
        paramsTaskRule(middlewares),          //* Reglas
        deleteTaskController( dependencies )  //* Controlador
    );


    return taskRouter;
};