module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpResponses, statusCode } = dependencies;

    const createTaskController = async( req, res, next ) => {
        try {
            httpResponses.responseSuccess(res, {
                status_code: statusCode.CREATED,
                data: {
                    message: 'Created Task !! 😊',
                    body: req.body
                }
            });
        } catch (error) {
            console.log('❌ CREATE_TASK_CONTROLLER_ERROR: ', error);
            next( error );
        }
    }
    return createTaskController;
};