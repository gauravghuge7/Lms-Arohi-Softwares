import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({

    adminName: {
        type: String,
        required: true,
    },

    adminEmail: {
        type: String,
        required: true,
        unique: true,
    },
    adminPhoneNumber: {
        type: String,
        required: true,
    },

    adminPassword: {
       type: String,
       required: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    
}, {timestamps: true});


export default mongoose.model('Admin', AdminSchema);