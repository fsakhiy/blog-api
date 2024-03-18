import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { ErrorResponse } from "../responses/responses";

export async function validate(req: Request, res: Response, next: NextFunction, schema: Joi.ObjectSchema<any>) {
    try {
        await schema.validateAsync(req.body)
    } catch(e) {
        return res.status(400).send(new ErrorResponse('invalid payload', e))
    }
    next()
}