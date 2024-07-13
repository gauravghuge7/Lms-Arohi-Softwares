import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({

    studentMail : {
        type : String,
        required : true
    },

    courseName : {
        type : String,
        // required : true
    },

    courseCode : {
        type : String,
        // required : true
    },

    orderId : {
        type : String,
        // required : true
    },

    transactionId : {
        type : String,
        required : true
    },

    transactionDate : {
        type : Date.now(),
        // required : true
    },

    amount : {
        type : Number,
        required : true
    },

    status : {
        type : String,
        enum : ['pending', 'paid', 'failed'],
        default : 'pending'
    },



    
    


}, {timestamps: true});




export const Payment = mongoose.model("Payment", paymentSchema);