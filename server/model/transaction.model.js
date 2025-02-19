import mongoose, { model } from "mongoose";

// Creating schema of the collection

const transactionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        amount: {
            type: Number,
            required: true,
            default: 0,
        },

        type: {
            type: String,
            required: true,
            enum: ['income','expense'],
        },

        category: {
            type: String,
            required: true,
            enum: ["Salary", "Food", "Rent", "Shopping", "Entertainment", "Other"]
        },

        date: {
            type: Date,
            default: Date.now,
        },

        recurring: {
            type: Boolean,
            default: false,
        },
    },
    {
        Timestamp: true,
    }
);

// model of the collection

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;