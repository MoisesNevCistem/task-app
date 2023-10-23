//* Importaciones globales 
const cors = require('cors');

/**
* Habilita CORS para todos  los origenes especificados.
* @returns Retorna funcionalidades de CORS.
*/
const allowedOriginsCors = () => {
    const { LIST_ORIGINS_CORS } = process.env;

    if(LIST_ORIGINS_CORS !== ''){
        /**
         * @type {Array} Lista de origenes permitidos.
         */
        const whiteList = LIST_ORIGINS_CORS.split('|');

        return cors({
            origin: whiteList
        });
    }

    return cors();
};

module.exports = {allowedOriginsCors}; 