import express from 'express';
import 
{   getTransactions, 
    getTransaction, 
    postTransactions,
    updateTransactions,
    deleteTransactions
} from '../controllers/transactions.controller.js'

const Router = express.Router();

Router.get('/', getTransactions);
Router.get('/:id', getTransaction);
Router.post('/', postTransactions);
Router.put('/:id', updateTransactions);
Router.delete('/:id', deleteTransactions);

export default Router;
