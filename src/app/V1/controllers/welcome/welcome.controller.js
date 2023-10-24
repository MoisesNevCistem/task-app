module.exports = ( dependencies ) => {
    //? Desestructuración de dependencias
    const { statusCode, httpResponses } = dependencies;

    const welcomeController = async( req, res, next ) => {
        try {
            httpResponses.responseSuccess(res, {
                status_code: statusCode.OK,
                data: {
                    message: 'Welcome to REST API Task App!! 😊',
                    server: 'app'
                }
            });
        } catch (error) {
            console.log('❌ WELCOME_CONTROLLER ERROR: ', error);
            next( error );
        }
    }
    return welcomeController;
};