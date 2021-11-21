import { InvariantError } from '../../exceptions/InvariantError.js';
import { postThreadPayloadSchema } from './schema.js';

const threadValidators = {
  validatePostThreadPayload(payload) {
    const validateResult = postThreadPayloadSchema.validate(payload);
    if (validateResult.error) {
      throw new InvariantError(validateResult.error.message);
    }
  },
};

export { threadValidators };
