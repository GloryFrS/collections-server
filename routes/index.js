import Router from 'koa-router';
import initApi from './api';

const router = new Router();

initApi(router)

router.get('*', (ctx) => {//next
  console.log('------------------');
  console.log(ctx.path); 
});

export default router;