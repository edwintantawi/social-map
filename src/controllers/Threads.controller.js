class ThreadsController {
  constructor(models) {
    this._models = models;

    this.postThread = this.postThread.bind(this);
    this.getThreads = this.getThreads.bind(this);
  }

  async postThread(req, res) {
    const { caption } = req.body;

    if (!caption) {
      res.status(400);
      return res.json({
        status: 'fail',
        message: 'Masukan woi caption nya',
      });
    }

    try {
      const threadId = await this._models.addThread({ caption });

      res.status(201);
      return res.json({
        status: 'success',
        data: { threadId },
      });
    } catch (error) {
      res.status(400);
      return res.json({
        status: 'fail',
        message: error.message,
      });
    }
  }

  async getThreads(_, res) {
    const threads = await this._models.getThreads();

    return res.json({
      status: 'success',
      data: { threads },
    });
  }
}

export { ThreadsController };
