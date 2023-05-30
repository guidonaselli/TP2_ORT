import { Router } from 'express'
import postRoutes from './postRoutes.js'
import userRoutes from './userRoutes.js'

const router = Router();

router.use('/post', postRoutes);
router.use('/user', userRoutes);

export default router;