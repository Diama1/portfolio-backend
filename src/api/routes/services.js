import { Router } from 'express';
import ServiceController from '../controllers/service';

const router = Router();
const { createService, getAllServices } = ServiceController;

router.post('/', createService);
router.get('/', getAllServices);

export default router;
