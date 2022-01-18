import { getEnv } from '../config/index.js';
import { Thread } from '../models/Threads.model.js';
import { User } from '../models/Users.model.js';

class ViewsController {
  static getHomePage(req, res) {
    const MAPBOX_TOKEN = getEnv('MAPBOX_TOKEN');
    res.render('index', { MAPBOX_TOKEN, user: req.user });
  }

  static getPostPage(req, res) {
    if (req.user) {
      const MAPBOX_TOKEN = getEnv('MAPBOX_TOKEN');
      res.render('post', { MAPBOX_TOKEN, user: req.user });
    } else {
      res.redirect('/');
    }
  }

  static async getProfilePage(req, res) {
    if (req.user) {
      const threads = await Thread.findAll({
        where: { userId: req.user.id },
        order: [['createdAt', 'DESC']],
      });

      res.render('profile', { user: req.user, profileUser: req.user, threads });
    } else {
      res.redirect('/');
    }
  }

  static async getOtherProfilePage(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });

    const threads = await Thread.findAll({
      where: { userId: req.params.id },
      order: [['createdAt', 'DESC']],
    });

    if (user) {
      res.render('profile', { user: req.user, profileUser: user, threads });
    } else {
      res.redirect('/');
    }
  }
}

export { ViewsController };
