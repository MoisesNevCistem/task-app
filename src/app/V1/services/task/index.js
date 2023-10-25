//* Importación de servicios de tarea
const createTaskService = require('./create.task.service');
const getTasksService = require('./get.tasks.service');

module.exports = {
    createTaskService,
    getTasksService
};