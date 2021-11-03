import { Router } from 'express';
import userRegister from './userRegister';

const router = Router();

router.post('/', userRegister); // методом 'POST' обращаемся сюда -> localhost:5000/user/ -> выполняем userRegister

export default router;
