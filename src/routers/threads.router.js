import express from 'express';
import { ThreadsController } from '../controllers/Threads.controller.js';
import { ThreadsModel } from '../models/Threads.model.js';

const router = express.Router();

const threadsModel = new ThreadsModel();
const threadsController = new ThreadsController(threadsModel);

router.post('/', threadsController.postThread);
router.get('/', threadsController.getThreads);

export default router;
