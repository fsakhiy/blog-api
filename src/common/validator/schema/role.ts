import Joi from "joi";

export const createRoleSchema = Joi.object({
    roleName: Joi.string()
    .alphanum()
    .required(),

    roleAccessIds: Joi.array()
    .items(Joi.string().required()).required()
})