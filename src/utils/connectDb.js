import { Sequelize } from "sequelize";
import { DB_CONFIG } from "../configs/Envs.js";



export const sequelize = new Sequelize(DB_CONFIG.DATABASE, DB_CONFIG.USER, DB_CONFIG.PASSWORD, {
    host: DB_CONFIG.HOST,
    dialect: 'postgres'
});

/**
 * @function testDbConnection is used to database connection
 */


export const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
    } catch (e) {
        console.error(`Unable to connect to the database: `, e);
    }
}