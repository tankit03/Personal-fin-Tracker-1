import express from 'express';
import 
{   getTransactions, 
    getTransaction, 
    postTransactions,
    updateTransactions,
    deleteTransactions
} from '../controllers/transactions.controller.js'

const router = express.Router();

router.get('/', getTransactions);
router.get('/:id', getTransaction);
router.post('/', postTransactions);
router.put('/:id', updateTransactions);
router.delete('/:id', deleteTransactions);

export default router;
