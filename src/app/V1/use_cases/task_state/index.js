//* Importación de casos de uso de tareas
const createTaskStateCase = require('./create.task.state.case');
const getTasksStateCase = require('./get.tasks.state.case');
const getTaskStateCase = require('./get.task.state.case');

module.exports = {
    createTaskStateCase,
    getTasksStateCase,
    getTaskStateCase
};