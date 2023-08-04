import { ENV } from "../configs/Envs";

import { Request, Response } from "express";

/**
 * 
 * @param {Error} err 
 * @param {Request} req 
 * @param {Response} res 
 * @returns Error if only in development process else 
 */

export const handleHttpError = async (err, req, res) => {
    if (ENV == "dev") {
        console.error(err.stack);
        return res.status(500).send(err.stack);
    }
    console.error(err.stack);
    return res.status(500).send(`There is error in the server!`);
}