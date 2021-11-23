import express from 'express';
import { ViewsController } from '../controllers/Views.controller.js';

const router = express.Router();

const viewsController = new ViewsController();

router.get('/', viewsController.getHomePage);
router.get('/post', (_, res) => res.render('post'));

export default router;
