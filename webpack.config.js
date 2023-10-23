//* Importaciones locales
const { runWebpack } = require('./webpack/run.webpack');

/**
* Función que precarga la configuración inicial de Webpack
* @param {object} env Define el tipo de entorno en el que se ejecuta Webpack
* @param {object} arg Define varaibles de entorno globales de Webpack
* @returns {object} Retorna funcionalidades de Webpack
*/
const BuildConfig = ( env, arg ) => {
    if ( arg.mode === 'development' || arg.mode === 'production' ) {
        console.log(`✔ Executing Webpack in mode "${ arg.mode }"...`);
        return runWebpack();
    } else {
        console.log(`The mode "${ arg.mode }" parameter is not a valid configuration mode for Webpack.\n`);
        console.log('Maybe you meant to put "development" or "production"\n');
    }
}
module.exports = BuildConfig;