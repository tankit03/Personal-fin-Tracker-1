// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Transaction from './model/transaction.model.js';
import productRoutes from './routes/transaction.routes.js';

const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Pulling info from .env
dotenv.config();

// Connecting to MongoDB and then starting the server

mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log('DB connected');
    app.listen (3000, ()=> {
        console.log('Server is running on port: http://localhost:3000');
    })
})
.catch(() => {
    console.log('DB connection failed');
})

// Making a requst to the root URL

app.get('/', (req, res) => {
    res.send("hello world from WiseTankit");
});

// routes 

app.use("/api/transactions", productRoutes);




// This API will show you all the transaction you've added to the db.


// app.get('/api/transactions', async (req, res) => {

//     try {
//         const Transactions = await Transaction.find({});
//         res.status(200).json(Transactions);
        
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }

// });

// This API will show you transaction by the basis ID added to the db.

// app.get('/api/transactions/:id', async (req, res) => {

//     try {
//         const { id } = req.params;
//         const idTransaction = await Transaction.findById(id);

//         if(!idTransaction){
//             return res.status(404).json({message: "Transaction not found"})
//         }

//         res.status(200).json(idTransaction);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }

// });

// This API will allow you to submit new Transactions.

// app.post('/api/transactions', async (req, res) => {

//     try {
//         const Transactions = await Transaction.create(req.body);
//         res.status(200).json(Transactions);  
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });


// update Transactions

// app.put('/api/transactions/:id', async (req, res) => {

//     try {
    
//         const { id } = req.params;
        
//         const idTransaction = await Transaction.findByIdAndUpdate(id, req.body);

//         if(!idTransaction){
//             return res.status(404).json({message: "Transaction Id not found"})
//         }

//         const updateIdTransaction = await Transaction.findById(id);
//         res.status(200).json(updateIdTransaction);

//     } catch (error) {
//         res.status(500).json({message: error.message});
        
//     }

// });

// delete a Transaction 

// app.delete('/api/transactions/:id', async (req, res) => {

//     try {
        
//         const { id } = req.params;
//         const idTransaction = await Transaction.findByIdAndDelete(id);

//         if(!idTransaction){
//             return res.status(404).json({message: "Transaction Id not found"})
//         }

//         const deleteTransaction = await Transaction.findById(id);
//         res.status(200).json({message: `This transaction was deleted for ID: ${id}`});
    
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });