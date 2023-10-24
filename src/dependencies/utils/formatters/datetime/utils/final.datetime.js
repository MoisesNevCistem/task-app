/**
 * Formatea el ordenamiento de los digitos del año.
 * @param {object} options - Define la configuración de fechas.
 * @param {string} options.date - Define la fecha a formatear.
 * @param {string} options.order - Define el orden de retorno de la fecha.
 * @param {string} options.separator - Define el separador en que se unirán las fechas.
 * @returns {string} Fecha formateada.
 */
const finalDatetime = ( options ) =>{
    //? Desestruturación de propiedades
    const { date, order, separator } = options;
    
    const dateSplit = date.split('-');

    switch (order) {
        case 'DD-MM-YYYY':
            if(separator === 'no_separator') return `${ dateSplit[0] }${ dateSplit[1] }${ dateSplit[2] }`;
            if(separator === 'dash') return `${ dateSplit[0] }-${ dateSplit[1] }-${ dateSplit[2] }`;
            if(separator === 'diagonal') return `${ dateSplit[0] }/${ dateSplit[1] }/${ dateSplit[2] }`;
            break;
        case 'MM-DD-YYYY':
            if(separator === 'no_separator') return `${ dateSplit[1] }${ dateSplit[0] }${ dateSplit[2] }`;
            if(separator === 'dash') return `${ dateSplit[1] }-${ dateSplit[0] }-${ dateSplit[2] }`;
            if(separator === 'diagonal') return `${ dateSplit[1] }/${ dateSplit[0] }/${ dateSplit[2] }`;
            break;
        case 'YYY-MM-DD':
            if(separator === 'no_separator') return `${ dateSplit[2] }${ dateSplit[1] }${ dateSplit[0] }`;
            if(separator === 'dash') return `${ dateSplit[2] }-${ dateSplit[1] }-${ dateSplit[0] }`;
            if(separator === 'diagonal') return `${ dateSplit[2] }/${ dateSplit[1] }/${ dateSplit[0] }`; 
            break;
    }
};

module.exports = { finalDatetime };