import { getEnv } from '../config/index.js';

class ViewsController {
  getHomePage(_, res) {
    const MAPBOX_TOKEN = getEnv('MAPBOX_TOKEN');
    res.render('index', { MAPBOX_TOKEN });
  }

  getPostPage(_, res) {
    const MAPBOX_TOKEN = getEnv('MAPBOX_TOKEN');
    res.render('post', { MAPBOX_TOKEN });
  }
}

export { ViewsController };
