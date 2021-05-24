import express from 'express';

import { getAllCodes, getOneCode, createCode } from '../controllers/codes.js';

const router = express.Router();

router.get('/', getAllCodes);
router.get('/:id', getOneCode);
router.post('/', createCode);
router.post('/sendToCompiler')

export default router;