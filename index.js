//* Configuración de variables entorno globales
require('dotenv').config();

//* Importación de dependencias
const dependencies = require('./src/dependencies');

//* Importación del run app  de la aplicacion
const { runApp } = require('./src/run.app');

//* Importación de los enrutadores principales
const { appRouter } = require('./src/app/main.routes');
const { authRouter } = require('./src/auth/main.routes');

//* Inicialización de servidores
const AppServer = runApp( appRouter );
const AuthServer = runApp( authRouter );

//? Desestructuración de variables de entorno
const { NODE_ENV, APP_PORT, AUTH_PORT, HTTPS } = process.env;

//? Desestructuración de dependencias
const { utils } = dependencies;

//* Ejecución de servidores
    if(NODE_ENV === 'production' && Boolean( HTTPS ) ){

        console.log('✔ Deploy server HTTPS');

        utils.deploys.httpsDeploy({
            env: 'APP',
            port: APP_PORT,
            server: AppServer
        });

        utils.deploys.httpsDeploy({
            env: 'AUTH',
            port: AUTH_PORT,
            server: AuthServer
        });

    } else{ 
        console.log('✔ Deploy server HTTP');

        utils.deploys.httpDeploy({
            env: 'APP',
            port: APP_PORT,
            server: AppServer
        });

        utils.deploys.httpDeploy({
            env: 'AUTH',
            port: AUTH_PORT,
            server: AuthServer
        });
    }


console.log("✨ Task APP REST API has been started...");
