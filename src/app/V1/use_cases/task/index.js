//* Importación de casos de uso de tareas
const createTaskCase = require('./create.task.case');
const getTaskCase = require('./get.tasks.case');
const getOneTaskCase = require('./get.task.case');

module.exports = {
    createTaskCase,
    getTaskCase,
    getOneTaskCase
};