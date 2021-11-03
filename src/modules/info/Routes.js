import { Router } from 'express';
import getInfo from './getInfo';
const router = Router();

router.post('/', getInfo);

export default router;
