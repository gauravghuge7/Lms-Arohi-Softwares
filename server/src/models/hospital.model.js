import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    
    hospitalName: {
        type: String,
        required: true,
    },
    
    hospitalAddress: {
        type: String,
        required: true,
    },
     
    hospitalPhoneNumber: {
        type: String,
        required: true,
        unique: true,
    },         

    hospitalsType: {
        type: String,
        enum: ['General Hospital', 'Government Hospital', 'Specialized Hospital', 'Private Hospital'],
        required: true,
    },

    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }],

    

});
  
export default mongoose.model('Hospital', hospitalSchema);