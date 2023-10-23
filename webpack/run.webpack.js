//* Importaciones globales
const { join } = require('path');

//* Importaciones locales
const { nodeWebpackConfig, output, rules } = require('./props');

/**
 * Función que ejecuta e inicializa funcionalidades de Webpack
 * @returns {object} Retorna el objeto de configuración de Webpack
 */
const runWebpack = () => {
    console.log('✔ Running loaders and Webpack plugins...\n');
    return {
        mode: 'production',
        entry: join( __dirname, '../' ),
        output,
        ...nodeWebpackConfig,
        module: rules,
        watch: false,
    }
}

module.exports = { runWebpack };