import express from 'express';

const app = express();

app.use('/', (_req, res) => res.sendStatus(201));

export default app;