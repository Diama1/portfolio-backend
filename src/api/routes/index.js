import express from 'express';
import serviceRouter from './services';

const api = express();

api.use('/service', serviceRouter);

export default api;
