import express from 'express';

const api = express();

api.get('/', (req, res) => res.send('Welcome to my Portfolio'));

export default api;
