import { Router } from 'express';
import ServiceController from '../controllers/service';

const router = Router();
const {
  createService, getAllServices, updateService, deleteService
} = ServiceController;

router.post('/', createService);
router.get('/', getAllServices);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;
