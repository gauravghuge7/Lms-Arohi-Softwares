import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const StudentSchema = new mongoose.Schema({
 
    studentFullName: {
        type: String,
        required: true,
    },

    studentCourseCode: {

        type: String

    },

    
    studentAge: {
        type: Number,
        required: true,
    },

    studentAvatar: {
        public_id: {
            type: String,
            required: true,
        },
        public_url: {
            type: String,
            required: true,
        }

    },

    studentAddress: {
        type: String,
        required: true,
    },

    studentPhoneNumber: {
        type: Number,
        required: true,
    },

    studentGender: {
        type: String,
        required: true,
    },

    studentPassword: {
        type: String,
        required: true,
    },

    studentEmail: {
        type: String,
        required: true,
        unique: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    studentCources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }],





}, {timestamps: true});



StudentSchema.methods = {

    generateStudentLogin: function () {

        return jwt.sign(
            {
                studentEmail: this.studentEmail,
                studentPassword: this.studentPassword,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h",
            }
        )
    }
}



export default mongoose.model('Student', StudentSchema);