import mongoose from 'mongoose';
import JWT from 'jsonwebtoken';

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
    }],



    
}, {timestamps: true});


adminSchema.methods = {

    generateAdminLogin: function () {

        return JWT.sign(   
            {
                id: this._id,
                adminEmail: this.adminEmail,
                adminName: this.adminName,
                adminPhoneNumber: this.adminPhoneNumber,

            },

            process.env.JWT_SECRET,
            
            { expiresIn: '24h' }
        )

    }
}




export const Admin = mongoose.model('Admin', adminSchema);