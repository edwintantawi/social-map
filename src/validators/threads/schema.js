import Joi from 'joi';

const postThreadPayloadSchema = Joi.object({
  caption: Joi.string().required(),
  latitude: Joi.string().empty('').default(null),
  longitude: Joi.string().empty('').default(null),
  location: Joi.string().empty('').default(null),
});

// const postThreadPayloadSchema = Joi.object({
//   caption: Joi.string().required(),
//   latitude: Joi.number().min(-90).max(90),
//   longitude: Joi.number().min(-180).max(180),
//   location: Joi.string(),
// });

export { postThreadPayloadSchema };
