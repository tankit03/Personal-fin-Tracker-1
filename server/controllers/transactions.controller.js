import Transaction from "../model/transaction.model.js";

export const getTransactions = async (req, res) => {
    try {
        const Transactions = await Transaction.find({});
        res.status(200).json(Transactions);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const getTransaction = async (req, res) => {

    try {
        const { id } = req.params;
        const idTransaction = await Transaction.findById(id);

        if(!idTransaction){
            return res.status(404).json({message: "Transaction not found"})
        }

        res.status(200).json(idTransaction);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const postTransactions = async (req, res) =>{
    try {
        const Transactions = await Transaction.create(req.body);
        res.status(200).json(Transactions);  
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const updateTransactions = async (req, res) => {
    
    try {
    
        const { id } = req.params;
        
        const idTransaction = await Transaction.findByIdAndUpdate(id, req.body);

        if(!idTransaction){
            return res.status(404).json({message: "Transaction Id not found"})
        }

        const updateIdTransaction = await Transaction.findById(id);
        res.status(200).json(updateIdTransaction);

    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
};

export const deleteTransactions = async (req, res) => {
    try {
        
        const { id } = req.params;
        const idTransaction = await Transaction.findByIdAndDelete(id);

        if(!idTransaction){
            return res.status(404).json({message: "Transaction Id not found"})
        }

        res.status(200).json({message: `This transaction was deleted for ID: ${id}`});
    
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};