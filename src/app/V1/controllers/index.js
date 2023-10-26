//* Importación de controladores
const welcomeController = require('./welcome/welcome.controller');
const taskControllers = require('./task');
const taskStateControllers = require('./task_state');

module.exports = {
    welcomeController,
    taskControllers,
    taskStateControllers
};