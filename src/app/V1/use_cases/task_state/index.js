//* Importación de casos de uso de tareas
const createTaskStateCase = require('./create.task.state.case');
const getTasksStateCase = require('./get.tasks.state.case');
const getTaskStateCase = require('./get.task.state.case');
const updateTaskStateCase = require('./update.task.state.case');
const deleteTaskStateCase = require('./delete.task.state.case');


module.exports = {
    createTaskStateCase,
    getTasksStateCase,
    getTaskStateCase,
    updateTaskStateCase,
    deleteTaskStateCase
};