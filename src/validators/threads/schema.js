import Joi from 'joi';

const postThreadPayloadSchema = Joi.object({
  caption: Joi.string().required(),
  latitude: Joi.string().empty(''),
  longitude: Joi.string().empty(''),
  location: Joi.string().empty(''),
});

export { postThreadPayloadSchema };
