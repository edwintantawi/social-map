import express from 'express';
import { ThreadsController } from '../controllers/Threads.controller.js';
import { ThreadsModel } from '../models/Threads.model.js';
import { threadValidators } from '../validators/threads/index.js';

const router = express.Router();

const threadsModel = new ThreadsModel();
const threadsController = new ThreadsController(threadsModel, threadValidators);

router.post('/', threadsController.postThreadHandler);
router.get('/', threadsController.getThreadsHandler);
router.get('/:id', threadsController.getThreadsByIdHandler);

export default router;
