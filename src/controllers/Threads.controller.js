import { ClientError } from '../exceptions/ClientError.js';

class ThreadsController {
  constructor({ threadsModel, storageService, threadValidators }) {
    this._models = threadsModel;
    this._storageService = storageService;
    this._validator = threadValidators;

    this.postThreadHandler = this.postThreadHandler.bind(this);
    this.getThreadsHandler = this.getThreadsHandler.bind(this);
    this.getThreadsByIdHandler = this.getThreadsByIdHandler.bind(this);
  }

  async postThreadHandler({ body, file }, res) {
    try {
      this._validator.validatePostThreadPayload(body);

      const { url } = await this._storageService.upload(file);

      const newBody = {
        ...body,
        pictureUrl: url,
        latitude: body.latitude === '' ? null : body.latitude,
        longitude: body.longitude === '' ? null : body.longitude,
      };

      const threadId = await this._models.addThread(newBody);

      res.status(201);
      return res.json({
        status: 'success',
        data: { threadId },
      });
    } catch (error) {
      if (error instanceof ClientError) {
        res.status(error.statusCode);
        return res.json({
          status: 'fail',
          message: error.message,
        });
      }

      console.log(error);

      // server error
      res.status(500);
      return res.json({
        status: 'error',
        message: 'Server error',
      });
    }
  }

  async getThreadsHandler(_, res) {
    const threads = await this._models.getThreads();

    return res.json({
      status: 'success',
      data: { threads },
    });
  }

  async getThreadsByIdHandler({ params }, res) {
    try {
      const { id } = params;

      const thread = await this._models.getThreadsById(id);

      return res.json({
        status: 'success',
        data: { thread },
      });
    } catch (error) {
      if (error instanceof ClientError) {
        res.status(error.statusCode);
        return res.json({
          status: 'fail',
          message: error.message,
        });
      }

      console.log(error);
      // server error
      res.status(500);
      return res.json({
        status: 'error',
        message: 'Server error',
      });
    }
  }
}

export { ThreadsController };
