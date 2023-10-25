//* Importación de controladores de tareas
const createTaskController = require('./create.task.controller')
const getTasksController = require('./get.tasks.controller')
const getTaskController = require('./get.task.controller')

module.exports = {
    createTaskController,
    getTasksController,
    getTaskController
};