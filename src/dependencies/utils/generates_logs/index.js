//* Importaciones nativas
const fs = require('fs');
//* Importación de dependencias
const { datatimeFormat } = require('../formatters');
/**
* Generá un archivo de logs de errors, por día.
* @param errorStack Error proveniente del CatchErrorMiddleware.
*/
const generateLogs = ( errorStack ) => {
    /**
     * @type {string} Fecha actual para información del log.
     */
    const currentDate = datatimeFormat({
        dateOrder: 'DD-MM-YYYY',
        dateSeparator: 'diagonal',
        dateDisplay: 'fulldate'
    });
    /**
     * @type {string} Fecha actual para el nombre del archivo log generado.
     */
    const todayLogs = datatimeFormat({
        dateOrder: 'DD-MM-YYYY',
        dateSeparator: 'no_separator',
        dateDisplay: 'only_date'
    });
    /**
     * @type {string} Ruta del directorio de logs.
     */
    const PATH_LOGS = `./shared/logs/logs_${ todayLogs }.json`;
    /**
     * @type {array} Almacena el contenido existente en un documento.
     */
    let logData = [];
    /**
     * @type {string} Contenido que se va a registrar en el log.
     */
    const messageLog = { datetime: currentDate, response: errorStack };
    if ( fs.existsSync( PATH_LOGS ) ) {
        /**
         * @type Contenido actual de un archivo ya existente.
         */
        const content = fs.readFileSync(PATH_LOGS, 'utf-8');
        logData = JSON.parse(content);
    }
    //? Generación de log
    logData.push(messageLog);
    fs.writeFileSync(PATH_LOGS, JSON.stringify(logData, null, 2));
}
module.exports = { generateLogs };