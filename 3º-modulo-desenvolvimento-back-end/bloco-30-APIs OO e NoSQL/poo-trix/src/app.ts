import express from 'express';
import ErrorHandler from './Middleware/ErrorHandler';
import routes from './Routes/Routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handle);

export default app;