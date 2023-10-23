//* Importación nativas
const https = require('https');
const fs = require('fs');

/**
 * Habilita el servidor en HTTPS.
 * @param {object} deployConfig Define la configuración del despliegue del servidor.
 * @param {object} deployConfig.env Define el entorno a precargar.
 * @param {object} deployConfig.port Define el puerto del despliegue del aplicación.
 * @param {object} deployConfig.server Define el servidor a precargar.
 * @returns Inicialización del servidor.
 */
const httpsDeploy = ( deployConfig ) => {

    //? Desestructuración de variables de entorno
    const { HOST_HTTPS, SSL_KEY, SSL_CERT } = process.env;

    //? Desesrtructuración de propiedades
    const { env, port, server } = deployConfig;

    //? Configuración de certificados SSL
    const options = {
        key: fs.readFileSync( SSL_KEY ).toString('utf-8'),
        cert: fs.readFileSync( SSL_CERT ).toString('utf-8'),
    };

    //? Inicialización de  servidor HTTPS
    const serverHTTPS = https.createServer( options, server );

    return serverHTTPS.listen( port, () => {
        console.log(`⚡ [${ env }]: running at https://${ HOST_HTTPS }:${ port }`)
    });
};

module.exports = { httpsDeploy };