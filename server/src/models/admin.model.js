import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const adminSchema = new mongoose.Schema({

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

    courses: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
    }]

    
}, {timestamps: true});


adminSchema.methods = {

    generateAdminLogin: function () {

        return jwt.sign(   
            {
                id: this._id,
                adminEmail: this.adminEmail,
                adminName: this.adminName,
                adminPhoneNumber: this.adminPhoneNumber,

            },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

    }
}




export const Admin = mongoose.model('Admin', adminSchema);