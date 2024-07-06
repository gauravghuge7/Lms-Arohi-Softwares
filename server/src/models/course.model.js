import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({

	

	// courseDetails: [{

	// }],

	    adminEmail : {

			type: String
		},

    
		courseName: {
			type: String,

		},
	
		courseDescription: {
			type: String,

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

		},
	
		courseCode: {
			type: String,

		},
	
		courseSubject: {
			type: String,

		},
	
		courseTeacher: [{

			type: String,

			// teacher: {
			// 	type: mongoose.Schema.Types.ObjectId,
			// 	ref: 'Teacher',
	
			// },

			// teacherName: {
			// 	type: String,
	
			// },

			// teacherSubject:{
			// 	type: String,
		
			// },
			// teacherImage: {
			// 	type: String,
			// 	default: '',
	
			// }

			
		}],
	

		courseStartDate: {
			type: Date,
	
		},
	
		courseDuration: {
			type: String,
	
		},
		


}, {timestamps: true});
 
export default mongoose.model('Course', CourseSchema);  