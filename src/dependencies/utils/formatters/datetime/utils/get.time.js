/**
 * Obtiene la hora formateada en 'AM' y 'PM' a partir de una fecha asignada.
 * @param {date|string} date - Fecha y hora a convertir
 * @returns Formato de hora
 */
const getTime = ( date ) =>{
    
    /**
     * @type {string} Indicador de tiempo "AM" y "PM"
     */
    let timeIndicator = 'AM';

    /**
     * @type {date} Extracción de la hora.
     */
    let hour = date.getHours().toString().padStart(2, '0');;

    /**
     * @type {date} Extracción de los minutos.
     */
    const minutes = date.getMinutes().toString().padStart(2, '0');

    /**
     * @type {date} Extracción de los segundos.
     */
    const seconds = date.getSeconds().toString().padStart(2, '0');

    if(hour >= 12){
        timeIndicator = 'PM';
        if(hour > 12){ hour -= 12; }
    }

    return `${ hour }:${ minutes }:${ seconds } ${ timeIndicator }`;
};

module.exports = { getTime };