//* Importación de utilidades
const { getNetworks } = require('../networks/index');

/**
 * Habilita el servidor en HTTP.
 * @param {object} deployConfig Define la configuración del despliegue del servidor.
 * @param {object} deployConfig.env Define el entorno a precargar.
 * @param {object} deployConfig.port Define el puerto del despliegue del aplicación.
 * @param {object} deployConfig.server Define el servidor a precargar.
 * @returns Inicialización del servidor.
 */
const httpDeploy = ( deployConfig ) => {
    //? Desesrtructuración de propiedades
    const { env, port, server } = deployConfig;

    return server.listen(port, () => getNetworks({ env, port }));
};

module.exports = { httpDeploy };