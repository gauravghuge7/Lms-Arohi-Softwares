import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({

	courseName: {
		type: String,
		required: true,
	},

    courseDescription: {
		type: String,
		required: true,
	},

    coursePrice: {
		type: Number,
		required: true,
	},

    courseCode: {
		type: String,
		required: true,
	},

	courseSubject: {
		type: String,
		required: true,
	},

	courseTeacher: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Teacher',
		required: true,
	},

	courseTeacherName: [{
		type: String,
		required: true,
	}],

    courseDate: {
		type: Date,
		required: true,
	},

	courseTime: {
		type: String,
		required: true,
	},


}, {timestamps: true});
 
export default mongoose.model('Course', CourseSchema);  