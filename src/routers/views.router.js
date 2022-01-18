import express from 'express';
import { ViewsController } from '../controllers/Views.controller.js';

const router = express.Router();

router.get('/', ViewsController.getHomePage);
router.get('/post', ViewsController.getPostPage);
router.get('/profile', ViewsController.getProfilePage);
router.get('/profile/:id', ViewsController.getOtherProfilePage);

export default router;
