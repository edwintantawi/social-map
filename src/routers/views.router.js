import express from 'express';
import { ViewsController } from '../controllers/Views.controller.js';

const router = express.Router();

router.get('/', ViewsController.getHomePage);
router.get('/post', ViewsController.getPostPage);

export default router;
