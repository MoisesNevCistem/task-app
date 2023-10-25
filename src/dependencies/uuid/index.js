//* Importaciones globales
const { v4: UUIDV4 } = require('uuid');

const generateUUID = () => UUIDV4();

module.exports = { generateUUID }