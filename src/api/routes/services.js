import { Router } from 'express';
import ServiceController from '../controllers/service';
import upload from '../../handlers/multer';

const router = Router();
const {
  createService, getAllServices, updateService, deleteService
} = ServiceController;

router.post('/', upload.single('image'), createService);
router.get('/', getAllServices);
router.put('/:id', upload.single('image'), updateService,);
router.delete('/:id', deleteService);

export default router;
