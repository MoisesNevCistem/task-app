module.exports = ( dependencies ) => {
    const welcomeController = async( req, res, next ) => {
        try {
            res.status(200);
            res.json({message: 'servidor AUTH....'});
        } catch (error) {
            console.log('❌ WELCOME_CONTROLLER ERROR: ', error);
            next( error );
        }
    }
    return welcomeController;
};