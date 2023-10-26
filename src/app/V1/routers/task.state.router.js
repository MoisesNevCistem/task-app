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

    // //* Definición de servicios
    // taskRouter.get(
    //     '/tasks_state',                             //* Servicio API
    //     getTasksController( dependencies )    //* Controlador
    // );

    // //* Definición de servicios
    // taskRouter.get(
    //     '/task/:uuid_task',                   //* Servicio API
    //     paramsTaskRule(middlewares),          //* Reglas
    //     getTaskController( dependencies )     //* Controlador
    // );

    // //* Definición de servicios
    // taskRouter.put(
    //     '/task/:uuid_task',                   //* Servicio API
    //     [
    //         paramsTaskRule(middlewares),      //* Reglas params
    //         updateTaskRule(middlewares),      //* Reglas update
    //     ],      
    //     updateTaskController( dependencies )  //* Controlador
    // );

    // //* Definición de servicios
    // taskRouter.delete(
    //     '/task/:uuid_task',                   //* Servicio API
    //     paramsTaskRule(middlewares),          //* Reglas
    //     deleteTaskController( dependencies )  //* Controlador
    // );


    return taskRouter;
};