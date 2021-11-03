import { Router } from 'express';
import userGetAll from './userGetAll';
import userRegister from './userRegister';

const router = Router();

router.post('/', userRegister); // методом 'POST' обращаемся сюда -> localhost:5000/user/ -> выполняем userRegister
router.get('/', userGetAll); // методом 'GET' обращаемся сюда -> localhost:5000/user/ -> выполняем userGetAll

export default router;
