import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({

    patientFullName: {
        type: String,
        required: true,
    },

    patientEmail: {
        type: String,
        required: true,
        unique: true,
    },

    patientPhoneNumber: {
        type: String,
        required: true,
        unique: true,

        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Invalid phone number'
        }
    },

    age: {
        type: Number,
        required: true,
    },

    patientDateOfBirth: {
        type: Date,
        required: true,
    },

    patientAddress:{

        type: String,
        required: true,

    },

    
    gender: {
        type: String,
        required: true,
    },

    height: {
        type: Number,
        required: true,
    },

    weight: {
        type: Number,
        required: true,
    },

    bloodGroup: {
        type: String,
        default: 'A+',
    },


    allergies: {
        type: Array,
        default: [],
    },

    






}, {timestamps: true});

export default mongoose.model('Patient', patientSchema);