import { authValidatorWithJoi } from "../utils/validators/auth.validator.js";
import { createNewUser } from "../use-cases/auth.js"

export class AuthController {
    static async signUp(req, res, next) {
        try {
            const isValidInput = authValidatorWithJoi(req.body, "signUp");
            if (!isValidInput) {
                return res.status(400).send(isValidInput);
            }
            
            const createdNewUser = await createNewUser(req.body, req.body.title);
            if (createNewUser instanceof Error) {
                next(createNewUser);
            }
            res.status(201).send({
                message: "New user created",
                success: true
            })

        } catch (err) {
            next(err);
        }
    }
}