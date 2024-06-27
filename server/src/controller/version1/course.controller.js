import Course from '../../models/course.model.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import ApiResponse from '../../utils/apiResponse.js';
import { Admin } from '../../models/admin.model.js';
import ApiError from '../../utils/ApiError.js';




/// create a course

const createCourse = asyncHandler(async (req, res) => {

    const {adminEmail} = req.user;

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
            adminEmail,
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


    try {

        const course = await Course.findById({courseName});

        // if(!course) {

        //     return res.status(404).json(new ApiError(404, 'Course not found'));
            
        // }


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
            course.courseTeacher = courseTeacher;
        }

        if(courseStartDate) {
            course.courseStartDate = courseStartDate;
        }

        if(courseDuration) {
            course.courseDuration = courseDuration;
        }
        
     

        await course.save();

        return res
        .status(200)
        .json(new ApiResponse(200, 'Course updated successfully', course));

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







export {
    createCourse,
    updateCourse,
}