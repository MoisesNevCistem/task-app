//* Importaciones globales
const { DataTypes } = require('sequelize');

//* Importación de dependencias
const { sequelize } = require('../../sequelize');

//* Importación de modelos
const { TaskState } = require('../task_state');

const modelConfig = {
    tableName: 'tasks',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
};

const Task = sequelize.define('task', {
    task_id: {
        field: 'task_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid_task:{
        field: 'uuid_task',
        type: DataTypes.STRING,
        allowNull: false
    },
    title:{
        field: 'title',
        type: DataTypes.STRING,
        allowNull: false
    },
    task_description:{
        field: 'task_description',
        type: DataTypes.STRING,
        allowNull: false
    },
    task_state_id:{
        field: 'task_state_id',
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, modelConfig);

//? Asociaciones
Task.belongsTo(TaskState, { foreignKey: 'task_state_id'});

module.exports = { Task };