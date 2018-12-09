import { Router } from 'express';
import bodyParser from 'body-parser';
import TaskHandler from '@task/TaskHandler';

const router = Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', TaskHandler.getAll);
router.get('/:id', TaskHandler.getById);
router.delete('/:id', TaskHandler.deleteById);
router.put('/:id', TaskHandler.updateById);

export default router;