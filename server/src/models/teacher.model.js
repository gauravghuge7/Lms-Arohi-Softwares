import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema({
 
    teacherFullName: {
        type: String,
        required: true,
    },
    
    teacherAge: {
        type: Number,
        required: true,
    },
 
    teacherGender: {
        type: String,
        required: true,
    },
 
    teacherEmail: {
        type: String,
        required: true,
        unique: true,
    },

    teacherPassword: {
        type: String,
        required: true,
    },
      	 
    teacherPhoneNumber: {
        type: String,
        required: true,
     
    },

    teacherSubjects: [{
        type: String,

    }],

     
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',

    }],
   
   
}, {timestamps: true});
 
export default mongoose.model('Teacher', TeacherSchema);