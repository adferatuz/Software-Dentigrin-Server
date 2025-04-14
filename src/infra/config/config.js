const config = {
    PORT : 3000,
    SALT_ROUNDS : 10,
    SECRET_JWT_KEY : 'esta-es-una-frase-asombrosamente-secreta-$asdas54asfd#%',
    CORS_OPTIONS :{
        origin : (origin, callback) => {
            const ACCEPTED_ORIGINS = [
                'http://localhost:5173'
            ]

            if(ACCEPTED_ORIGINS.includes(origin)){
                return callback(null, 'http://localhost:5173')
            }

            if(!origin){
                return callback(null, true)
            }
            return callback(new Error('Not allowed by CORS'))
        },
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders : ['Content-Type', 'Authorization'],
        credentials : true
    }
};

module.exports = config;