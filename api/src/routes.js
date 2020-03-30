import { Router } from 'express';
import multer from 'multer';

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DeliveryguyController from './app/controllers/DeliveryguyController';
import OrderController from './app/controllers/OrderController';
import PendentController from './app/controllers/PendentController';
import DeliveriesController from './app/controllers/DeliveriesController';
import ProblemController from './app/controllers/ProblemController';
import PickupController from './app/controllers/PickupController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.get('/deliveryguys/:id', DeliveryguyController.find);

routes.get('/deliveryguy/:deliveryguy_id/pendents', PendentController.index);
routes.get(
    '/deliveryguy/:deliveryguy_id/deliveries',
    DeliveriesController.index
);

routes.put('/orders/:orderId/pickup', PickupController.update);
routes.put('/orders/:orderId/deliveries', DeliveriesController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/orders/:orderId/problems', ProblemController.find);
routes.post('/orders/:orderId/problems', ProblemController.store);

routes.use(authMiddleware);

routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.find);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.get('/deliveryguys', DeliveryguyController.index);
routes.post('/deliveryguys', DeliveryguyController.store);
routes.put('/deliveryguys/:id', DeliveryguyController.update);
routes.delete(
    '/deliveryguys/:id',

    DeliveryguyController.delete
);

routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.find);
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.delete('/orders/:id', OrderController.delete);

routes.get('/order/problems', ProblemController.index);
routes.delete('/order/:problemId/cancel-delivery', ProblemController.delete);

export default routes;
