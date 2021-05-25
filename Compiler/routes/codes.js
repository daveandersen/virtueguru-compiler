import express from 'express';

import { getAllCodes, getOneCode, createCode, clearCode } from '../controllers/codes.js';

const router = express.Router();

router.get('/', getAllCodes);
router.get('/:id', getOneCode);
router.post('/', createCode);
router.delete('/', clearCode);

export default router;