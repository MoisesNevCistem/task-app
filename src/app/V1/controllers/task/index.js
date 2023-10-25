//* Importación de controladores de tareas
const createTaskController = require('./create.task.controller')
const getTasksController = require('./get.tasks.controller')
const getTaskController = require('./get.task.controller')
const updateTaskController = require('./update.task.controller')
const deleteTaskController = require('./delete.task.controller')

module.exports = {
    createTaskController,
    getTasksController,
    getTaskController,
    updateTaskController,
    deleteTaskController
};