module.exports = ( dependencies ) => {

    //? Desestructuración de dependencias
    const { httpResponses, statusCode } = dependencies;

    const createTaskController = async( req, res, next ) => {
        httpResponses.responseSuccess(res, {
            status_code: statusCode.CREATED,
            data: {
                message: 'Created Task !! 😊',
            }
        });
    }
    return createTaskController;
};