import { Router } from 'express';
import KeyController from '../Controllers/KeyController';
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

routes.post(
  '/key/register',
  (req, res, next) => new KeyController(req, res, next).create(),
);

routes.get(
  '/key/owner/:name',
  (req, res, next) => new KeyController(req, res, next).getByOwner(),
);

routes.get(
  '/key/:value',
  (req, res, next) => new KeyController(req, res, next).getByValue(),
);

export default routes;