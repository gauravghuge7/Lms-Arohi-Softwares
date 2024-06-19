import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({

	

	courseDetails: [{

		courseName: {
			type: String,
			required: true,
		},
	
		courseDescription: {
			type: String,
			required: true,
		},

		courseImage: {
			type: String,
			
		},

		videoLink: [{
			public_id :{
				type: String,
			},

			private_url: {
				type: String,
			}
		}],

		coursePdf: [{

			public_id :{
				type: String,
			},
			private_url: {

				type: String,

			}

		}],

		courseTests: [{

			public_id :{
				type: String,
			},
			private_url: {

				type: String,

			}

		}],
	
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
	
		courseTeacher: [{
			teacher: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Teacher',
				required: true,
			},

			teacherName: {
				type: String,
				required: true,
			},

			teacherSubject:{
				type: String,
				required: true,
			},
			teacherImage: {
				type: String,
				default: '',
				required: true,
			}

			
		}],
	

		courseStartDate: {
			type: Date,
			required: true,
		},
	
		courseDuration: {
			type: String,
			required: true,
		},
		
	}],

    


}, {timestamps: true});
 
export default mongoose.model('Course', CourseSchema);  