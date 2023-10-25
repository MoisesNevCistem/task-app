//* Importación de casos de uso de tareas
const createTaskCase = require('./create.task.case');
const getTaskCase = require('./get.tasks.case');
const getOneTaskCase = require('./get.task.case');
const updateTaskCase = require('./update.task.case');

module.exports = {
    createTaskCase,
    getTaskCase,
    getOneTaskCase,
    updateTaskCase
};