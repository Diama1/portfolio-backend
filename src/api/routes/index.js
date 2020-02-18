import express from 'express';

const api = express();

api.get('/', (req, res) => res.json({ status: 200, message: 'Welcome To Portfolio' }));

export default api;
