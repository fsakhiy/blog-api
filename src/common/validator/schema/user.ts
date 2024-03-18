import Joi from "joi";

export const signupSchema = Joi.object({
    username: Joi.string()
    .alphanum()
    .min(5)
    .required(),

    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

    name: Joi.string()
    .required(),
    email: Joi.string()
    .required(),
    roleId: Joi.string()
    .required(),
})