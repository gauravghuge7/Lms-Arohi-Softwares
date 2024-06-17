import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({

    doctorFullName: {
        type: String,
        required: true,
    },
    
    specialty: {
        type: String,
        required: true,
    },
    
    doctorEmail: {
        type: String,
        required: true,
        unique: true,
    },

    doctorPhoneNumber: {
        type: Number,
        required: true,
    },

    hospitalsName: [{
        type: String,
        required: true,
    }],

    

    
});
export default mongoose.model('Doctor', doctorSchema);