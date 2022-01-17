import express from 'express';
import multer from 'multer';
import { ThreadsController } from '../controllers/Threads.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  '/',
  authMiddleware,
  upload.single('picture'),
  ThreadsController.postThreadHandler
);
router.get('/', ThreadsController.getThreadsHandler);

export default router;
