//* Importación de controladores de tareas
const createTaskStateController = require('./create.task.state.controller')
const getTasksStateController = require('./get.tasks.state.controller')

module.exports = {
    createTaskStateController,
    getTasksStateController
};