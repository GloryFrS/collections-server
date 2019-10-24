import controller from '../controllers/controller';

export default router => {
  router
    .post('/test', controller.test)
}
