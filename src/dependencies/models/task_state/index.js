//* Importaciones globales
const { DataTypes } = require('sequelize');

//* Importación de dependencias
const { sequelize } = require('../../sequelize');

const modelConfig = {
    tableName: 'task_states',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
};

const TaskState = sequelize.define('task_state', {
    task_state_id: {
        field: 'task_state_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid_task_state:{
        field: 'uuid_task_state',
        type: DataTypes.STRING,
        allowNull: false
    },
    task_status:{
        field: 'task_status',
        type: DataTypes.STRING,
        allowNull: false
    }
}, modelConfig);

module.exports = { TaskState };