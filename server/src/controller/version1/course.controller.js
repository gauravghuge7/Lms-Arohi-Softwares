import {Course} from '../../models/course.model.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import ApiResponse from '../../utils/apiResponse.js';
import ApiError from '../../utils/ApiError.js';
import { Lecture } from '../../models/lecture.model.js';
import { lectureUploadOnCloudinary, thumbnailUploadOnCloudinary } from '../../helpers/lecture.cloudinary.js';
import { Admin } from '../../models/admin.model.js';




/// create a course

const createCourse = asyncHandler(async (req, res) => {

    const {adminEmail} = req.user;

    console.log(adminEmail);

    const { courseName,courseThumbnail, courseDescription, coursePrice, courseCode,courseTeacher,courseEndDate, courseStartDate, courseDuration } = req.body;

    // if(!courseName || !courseDescription || !coursePrice || !courseCode || !courseTeacher || !courseStartDate ||!courseEndDate|| !courseDuration) {

    //     return res
    //     .status(400)
    //     .json(new ApiError(405, 'Missing required fields'));
    // }

    console.log("req.file => ", req.file);

    console.log(req.body);
    try {
    
        const corName = await Course.findOne({ courseCode });

        if(corName) {

            return res
            .status(400)
            .json(new ApiError(405, 'Course name already exists'));

        }

        const path = req.file.path;
        console.log("path -> ",path)
        const response = await thumbnailUploadOnCloudinary(path);

        // if(!response) {
        //     return res
        //     .status(400)
        //     .json(new ApiError(405, 'Thumbnail not uploaded', response));
        // }

        const course = await Course.create({
            
            courseName,
            courseDescription,
            coursePrice,
            courseCode,
            courseStartDate,
            courseEndDate,
            adminEmail:adminEmail,
            courseDuration,
            courseTeacher : courseTeacher,

            courseThumbnail: {
                public_id: response.public_id,
                private_url: response.secure_url
            }
          
            
        });


        console.log("After course", course);
        

        return res
        .status(201)
        .json(new ApiResponse(201, 'Course created successfully', course));


    } 
    catch (error) {

        return res
        .status(500)
        .json(new ApiError(500, error.message));
        
    }


});




const updateCourse = asyncHandler(async (req, res) => {

    

    const {courseName, courseDescription, coursePrice, courseSubject, courseTeacher, courseStartDate, courseDuration } = req.body;


    console.log("req.body => ", req.body);

    try {

        const course = await Course.findOne({courseName, courseCode});

        if(!course) {

            return res.status(404).json(new ApiError(404, 'Course not found'));
            
        }

        console.log("course after findById => ", course);


        if(courseDescription) {
            course.courseDescription = courseDescription;
        }

        if(coursePrice) {
            course.coursePrice = coursePrice;
        }

        if(courseSubject) {
            course.courseSubject = courseSubject;
        }

        if(courseTeacher) {
            course.courseTeacher.push({courseTeacher})
        }

        if(courseStartDate) {
            course.courseStartDate = courseStartDate;
        }

        if(courseDuration) {
            course.courseDuration = courseDuration;
        }
        
     
        
        await course.save();

        console.log("course after save => ", course);
        return res
        .status(200)
        .json(new ApiResponse(200, 'Course updated successfully', course));

    }    
    catch (error) {

        console.log("error => ", error);
        return res
        .status(500)
        .json(new ApiError(500, error.message));
        
    }


});



const getCourses = asyncHandler(async (req, res) => {

    try {

        const {adminEmail} = req.user;

        const admin = await Admin.findOne({adminEmail});

        if(!admin) {
            return res.status(404).json(new ApiError(404, 'Admin not found'));
        }

        const courses = await Course.find({adminEmail});

        return res
        .status(200)
        .json(new ApiResponse(200, 'Courses retrieved successfully', courses));
    }    
    catch (error) {

        return res
        .status(500)
        .json(new ApiError(500, error.message));
        
    }
}); 


const getCourseByCode = asyncHandler(async (req, res) => {

    const { courseCode } = req.query;

    if(!courseCode) {
        return res.status(400).json(new ApiError(405, 'Missing required fields'));
    }

    try {

        const course = await Course.findOne({courseCode});

        if(!course) {
            return res.status(404).json(new ApiError(404, 'Course not found'));
        }

        return res
        .status(200)
        .json(new ApiResponse(200, 'Course retrieved successfully', course));
    }    
    catch (error) {

        return res
        .status(500)
        .json(new ApiError(500, error.message));
        
    }
}); 


const deleteCourse = asyncHandler(async (req, res) => {

    const { courseId } = req.body;

    if(!courseId) {

        return res.status(400).json(new ApiError(405, 'Missing required fields'));
    }

    try {

        const course = await Course.findById(courseId);

        if(!course) {

            return res.status(404).json(new ApiError(404, 'Course not found'));
            
        }

        await course.deleteOne();

        return res
        .status(200)
        .json(new ApiResponse(200, 'Course deleted successfully', course));

    }    
    catch (error) {

        return res
        .status(500)
        .json(new ApiError(500, error.message));
        
    }


});




const uploadLectures = asyncHandler(async (req, res) => {

    const { courseCode } = req.query;

    const {teacherEmail } = req.user;

    const { lectureName,  lectureDescription } = req.body;


    if(!courseCode) { 
        return res.status(400).json(new ApiError(405, 'Missing required fields'));
    }

    try {
    
        const course = await Course.findOne({ courseCode });

        if(!course) {

            return res.status(404).json(new ApiError(404, 'Course not found'));
        
        }

        console.log("req.files => ", req.files);
        console.log("req.file => ", req.file);

        // const path = req.files.lecture.path;
        
        const path = req.file.path;


        const response = await lectureUploadOnCloudinary(path);
       




        const lecture = await Lecture.create({
            
            lectureName,
            lectureDescription,
            courseCode,

            teacherEmail,
            
            // videoLink: {
            //     public_id: response.public_id,
            //     private_url: response.secure_url    
            // }
            
        });

        return res
        .status(201)
        .json(new ApiResponse(201, 'Lecture created successfully', lecture));
    
    } 
    catch (error) { 
        
        console.log("error => ", error);
        return res
        .status(500)
        .json(new ApiError(500, error.message));
    } 
    
});







export {
    createCourse,
    updateCourse,
    deleteCourse,

    getCourses,
    getCourseByCode,

    // lectures routes 

    uploadLectures,

}