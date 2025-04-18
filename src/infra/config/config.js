//require('dotenv').config();

const config = {
  PORT: process.env.PORT,
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
  SECRET_JWT_KEY: process.env.SECRET_JWT_KEY,
  CORS_OPTIONS: {
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        process.env.ALLOWED_ORIGIN, // production
        process.env.ALLOWED_ORIGIN_DEV // development
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, origin);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }
};

module.exports = config;
