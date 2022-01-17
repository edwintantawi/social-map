import { nanoid } from 'nanoid';

import { Thread } from '../models/Threads.model.js';
import { ClientError } from '../exceptions/ClientError.js';
import { Cloudinary } from '../services/Cloudinary.js';
import { threadValidators } from '../validators/threads/index.js';
import { User } from '../models/Users.model.js';

const storageService = new Cloudinary();
class ThreadsController {
  static async postThreadHandler({ body, file, user }, res) {
    try {
      threadValidators.validatePostThreadPayload(body);

      const { url } = await storageService.upload(file);

      const id = `thread-${nanoid(16)}`;

      const newBody = {
        ...body,
        id,
        pictureUrl: url,
        latitude: body.latitude === '' ? null : body.latitude,
        longitude: body.longitude === '' ? null : body.longitude,
        userId: user.id,
      };

      const thread = await Thread.create(newBody);

      res.status(201);
      return res.json({
        status: 'success',
        data: { threadId: thread.dataValues.id },
      });
    } catch (error) {
      if (error instanceof ClientError) {
        res.status(error.statusCode);
        return res.json({
          status: 'fail',
          message: error.message,
        });
      }

      // server error
      res.status(500);
      return res.json({
        status: 'error',
        message: 'Server error',
      });
    }
  }

  static async getThreadsHandler(_, res) {
    const threads = await Thread.findAll({
      include: [{ model: User }],
      order: [['createdAt', 'DESC']],
    });

    return res.json({
      status: 'success',
      data: { threads },
    });
  }
}

export { ThreadsController };
