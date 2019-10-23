import Koa from 'koa';
import logger from 'koa-logger';
import config from 'config';
import mongoose from 'mongoose';
import cors from 'koa-cors';
import err from './middleware/error';
import router from './routes';

mongoose.set('debug', true);
mongoose.connect(config.mongodb.url, config.mongodb.options);
mongoose.connection.on('error', console.error);

const app = new Koa();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app
  .use(logger())
  .use(err)
  .use(cors(corsOptions))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.server.port, () => {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});