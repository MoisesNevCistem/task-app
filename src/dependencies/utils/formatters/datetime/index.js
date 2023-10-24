//* Importación de utilidades
const { getDate, getTime, finalDatetime } = require('./utils');

//* Definiciones JS Docs
/**
 * Formato de orden de fecha.
 * @typedef {'DD-MM-YYYY' | 'MM-DD-YYYY' | 'YYY-MM-DD' } DateOrder
 */

/**
 * Formato de separadores.
 * @typedef {'diagonal' | 'dash' | 'no_separator' } DateSeparator
 */

/**
 * Formato de retorno o despliegue de tiempo.
 * @typedef {'only_date' | 'only_time' | 'fulldate' } DateDisplay
 */

/**
 * 
 * @param {date|string} date - Define la fecha por formatear.
 * @param {object} datetimeConfig - Define la configuración del formato de fechas.
 * @param {DateDisplay} datetimeConfig.dateDisplay - Define la fecha sera desplegada.
 * @param {DateSeparator} datetimeConfig.dateOrder - Define el tipo de orden que tendra la fecha..
 * @param {DateOrder} datetimeConfig.DateSeparator - Define el tipo de sepador que tendra la fecha.
 * @param {*} datetimeConfig 
 */
const datatimeFormat = ( datetimeConfig, date  ) =>{ 
    //? Desestructuración de propiedades
    const { dateDisplay, dateOrder, dateSeparator } = datetimeConfig;
    /**
     * @type {date} Fecha y hora a formatear.
     */
    const datetime = date || new Date();

    const dateFormated = getDate(datetime);
    const timeFormated = getTime(datetime);

    //? Retorno de solo la hora
    if(dateDisplay === 'only_time') return `${ timeFormated }`;

    //? Retorno de solo la fehca
    if(dateDisplay === 'only_date'){
        const cleanDate = finalDatetime({
            date: dateFormated,
            order: dateOrder,
            separator: dateSeparator
        });
        return `${ cleanDate }`;
    }

    //? Retorno completo de tiempo
    if(dateDisplay === 'fulldate'){
        const cleanDate = finalDatetime({
            date: dateFormated,
            order: dateOrder,
            separator: dateSeparator
        });
        return `${ cleanDate } ${ timeFormated }`;
    }
};

module.exports = { datatimeFormat };