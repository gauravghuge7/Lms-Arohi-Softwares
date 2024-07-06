import Course from '../../models/course.model.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import ApiResponse from '../../utils/apiResponse.js';
import ApiError from '../../utils/ApiError.js';
import { Lecture } from '../../models/lecture.model.js';




/// create a course

const createCourse = asyncHandler(async (req, res) => {

    // const {adminEmail} = req.user;

    console.log(req.body);

    const { courseName, courseDescription, coursePrice, courseCode, courseSubject, courseTeacher, courseStartDate, courseDuration } = req.body;

    if(!courseName || !courseDescription || !coursePrice || !courseCode || !courseSubject || !courseTeacher || !courseStartDate || !courseDuration) {

        return res.status(400).json(new ApiError(405, 'Missing required fields'));
    }


    try {
    
        const corName = await Course.findOne({ courseName });

        console.log("corName");

        // if(corName) {

        //     return res.status(400).json(new ApiError(405, 'Course name already exists'));
            
        // }

        console.log("After corName");

       

        const course = await Course.create({
            
            courseName,
            courseDescription,
            coursePrice,
            courseCode,
            courseStartDate,
            // adminEmail,
            courseDuration,
            courseTeacher : [
                {
                    teacherName: courseTeacher,

                }
            ]
            
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

        const course = await Course.findOne({courseName});

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

        // if(courseTeacher) {
        //     course.courseTeacher = [{courseTeacher}]
        // }

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

    const { lectureName,  lectureDescription, attachments } = req.body;


    if(!courseCode) { 
        return res.status(400).json(new ApiError(405, 'Missing required fields'));
    }

    try {
    
        const course = await Lecture.findOne({ courseCode });

        if(!course) {

            return res.status(404).json(new ApiError(404, 'Course not found'));
        
        }

        if(req.files) {

            const response = await uploadOnCloudinary(req.files.attachments);

            console.log("response => ", response);
        }


        const lecture = await Lecture.create({
            
            lectureName,
            lectureDescription,
            courseCode,
            attachments,
            teacherEmail,
            videoLink: {
                public_id: response.public_id,
                private_url: response.secure_url    
            }
            
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

    // lectures routes 

    uploadLectures,

}