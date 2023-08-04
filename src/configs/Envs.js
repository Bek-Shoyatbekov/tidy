import "dotenv/config";

const PORT = process.env.PORT;

const ENV = process.env.ENV;

const DB_CONFIG = {
    PORT: process.env.DATABASE_PORT,
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE: process.env.DATABASE,
    HOST: process.env.DATABASE_HOST,
}

export {
    PORT,
    DB_CONFIG,
    ENV
}