//* Importación de servicios de tarea
const createTaskStateService = require('./create.task.state.service');
const getTasksStateService = require('./get.tasks.state.service');
const getTaskStateService = require('./get.task.state.service');
const updateTaskStateService = require('./update.task.state.service');
const deleteTaskStateService = require('./delete.task.state.service');


module.exports = {
    createTaskStateService,
    getTasksStateService,
    getTaskStateService,
    updateTaskStateService,
    deleteTaskStateService
};