//* importaciones de routes
const taskRouter = require('./task.router');
const taskStateRouter = require('./task.state.router');
const welcomeRouter = require('./welcome.router');

module.exports = {
    taskRouter,
    taskStateRouter,
    welcomeRouter
};