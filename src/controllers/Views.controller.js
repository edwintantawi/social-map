import { getEnv } from '../config/index.js';

class ViewsController {
  getHomePage(_, res) {
    const SERVER = getEnv('SERVER');
    const MAPBOX_TOKEN = getEnv('MAPBOX_TOKEN');
    res.render('index', { SERVER, MAPBOX_TOKEN });
  }
}

export { ViewsController };
