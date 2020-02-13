import express from 'express';
import api from './api/routes';

const port = process.env.PORT || 3000
const app = express();

app.use('/api', api );

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})

