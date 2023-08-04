import Joi from "joi";

let signUpSchema = Joi.object().keys({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    phoneNumber: Joi
        .number()
        .integer()
        .positive()
        .min(9)
        .max(10)
    ,
    email: Joi.string()
        .email({
            minDomainSegments: 2, tlds: { allow: ['com', 'net'] }
        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    title: Joi.valid("teacher", "student").required()
}).or("phoneNumber", "email");
let signInSchema = Joi.object().keys({
    phoneNumber: Joi
        .number()
        .integer()
        .positive()
        .min(9)
        .max(10)
    ,
    email: Joi.string()
        .email({
            minDomainSegments: 2, tlds: { allow: ['com', 'net'] }
        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    title: Joi.valid("teacher", "student").required()
}).or("phoneNumber", "email")


/**
 * @function authValidatorWithJoi 
 * @param {object} input 
 * @param {string} type
 *   function gets two inputs : data to be validated and type only signIn or signUp
 *   and returns value or error
 */


export const authValidatorWithJoi = (input, type) => {
    let result;
    if (type == "signUp") {
        result = signUpSchema.validate(input);
    }
    if (type == "signIn") {
        result = signInSchema.validate(input);
    }
    return handleValidatorError(result);
}


const handleValidatorError = (ValidationResult) => {
    const { error, value } = ValidationResult;
    if (error) {
        return error;
    }
    return value;
}


// Validation has been done !
// let result = authValidatorWithJoi({ title: "student", lastName: "Shoyatbekov" }, "signIn");
// console.log(result instanceof Error);