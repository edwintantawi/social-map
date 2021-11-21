import express from 'express';
import { ViewsController } from '../controllers/Views.controller.js';

const router = express.Router();

const viewsController = new ViewsController();

router.get('/', viewsController.getHomePage);

export default router;
