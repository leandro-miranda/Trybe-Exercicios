import { Router } from 'express';
import TransferController from '../Controllers/TransferController';

const routes = Router();

routes.post(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).create(),
);

routes.get(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).getAllTransfers(),
);

routes.get(
  '/transfer/:key',
  (req, res, next) => new TransferController(req, res, next).getByKey(),
);

routes.patch(
  '/transfer/:id',
  (req, res, next) => new TransferController(req, res, next).reversalRequest(),
);

export default routes;