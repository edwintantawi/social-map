import express from 'express';
import multer from 'multer';
import { ThreadsController } from '../controllers/Threads.controller.js';
import { ThreadsModel } from '../models/Threads.model.js';
import { Cloudinary } from '../services/Cloudinary.js';
import { threadValidators } from '../validators/threads/index.js';

const router = express.Router();

const storageService = new Cloudinary();

const threadsModel = new ThreadsModel();
const threadsController = new ThreadsController({
  threadsModel,
  storageService,
  threadValidators,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('picture'), threadsController.postThreadHandler);
router.get('/', threadsController.getThreadsHandler);
router.get('/:id', threadsController.getThreadsByIdHandler);

export default router;
