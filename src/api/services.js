import { Router } from 'express';
import ServiceController from './controllers/service';

const router = Router();
const { createService } = ServiceController;

router.post('/', createService);

export default router;
