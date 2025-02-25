// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Transaction from './model/transaction.model.js';
import transactionRoute from './routes/transaction.routes.js';
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';


const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


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

app.use("/api/transactions", transactionRoute);
app.use("/api/user", userRoutes);
