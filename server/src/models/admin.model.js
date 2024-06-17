import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({

    adminFullName: {    
        type: String,
        required: true,
    },
    
    adminEmail: {
        type: String,
        required: true,
    },         
    
    adminPhoneNumber: {
        type: String,
        required: true,
    },

    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    }],

    

});

export default mongoose.model('Admin', adminSchema);