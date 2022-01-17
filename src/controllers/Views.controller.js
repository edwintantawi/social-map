import { getEnv } from '../config/index.js';

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
}

export { ViewsController };
