import Joi from 'joi';

const postThreadPayloadSchema = Joi.object({
  caption: Joi.string().required(),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required(),
});

export { postThreadPayloadSchema };
