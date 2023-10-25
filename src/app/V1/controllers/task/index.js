//* Importación de controladores de tareas
const createTaskController = require('./create.task.controller')
const getTaskController = require('./get.tasks.controller')

module.exports = {
    createTaskController,
    getTaskController
};