import Student from '../../models/student.model.js';
import ApiError from '../../utils/ApiError.js';
import ApiResponse from '../../utils/apiResponse.js';
import {asyncHandler} from '../../utils/asyncHandler.js';
import uploadOnCloudinary from '../../helpers/cloudinary.js';
import bcrypt from "bcrypt"
import { Lecture } from '../../models/lecture.model.js';


const cookieOptions = {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,

}




const studentRegister = asyncHandler(async (req, res, next) => {

    const {studentFullName, studentPassword, studentPhoneNumber, studentAge, studentGender, studentEmail,} = req.body;

    if(!req.body) {
        throw new ApiError(400, 'Student data is missing');
    }

    if(!studentFullName || !studentPhoneNumber || !studentAge || !studentGender || !studentEmail) {


        return res
        .status(400)
        .json(new ApiError(400, 'Student data is missing'));
        
    }


    try {

        const user = await Student.findOne({studentEmail: studentEmail});

        if(user) {

            throw new ApiError(400, 'Student with this email already exists');
    
            // res.status(400)
            // .json(new ApiError(400, 'Student with this email already exists'));
        }


        const encryptedPassword = await bcrypt.hash(studentPassword, 10);


        const savedStudent = await Student.create({
            studentFullName,
            studentPhoneNumber,
            studentAge,
            studentPassword: encryptedPassword,
            studentGender,
            studentEmail,
        });
        


        return res
        .status(201)
        .json( new ApiResponse(201, 'Student created successfully', savedStudent));


    } 
    
    catch (error) {
        
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }
    
});


const studentLogin = asyncHandler(async (req, res, next) => {

    const {studentEmail, studentPassword} = req.body;

    if(!studentEmail || !studentPassword) {

        return res
        .status(400)
        .json(new ApiError(400, 'Student data is missing', req.body));
    }

    try {
    
        const user = await Student.findOne({studentEmail: studentEmail});


        if(!user) {

            return new ApiError(400, 'Student with this email already exists');
        }

        const isMatch = await bcrypt.compare(studentPassword, user.studentPassword);

        if (!isMatch) {
            return new ApiError(401, 'Invalid password for this student');
        }

        const studentToken = user.generateStudentLogin();


        return res
        .status(200)
        .cookie('studentToken', studentToken, cookieOptions)
        .json(new ApiResponse(200, 'Student login successfully', user));

        
    } 
    catch (error) {
        
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }

});


const studentUpdate = asyncHandler(async (req, res, next) => {

    const {studentEmail} = req.user;

    const { studentFullName, studentAge, studentGender} = req.body;

    try {
        const user = await Student.findOne({studentEmail: studentEmail});
    
        if(studentAge) {
    
            user.studentAge = studentAge;
            
        }
    
        if(studentGender) {
    
            user.studentGender = studentGender;
            
        }

        if(studentFullName) {

            user.studentFullName = studentFullName;
            
        }
    
       

        if(req.file) {

            const uploadedFile = await uploadOnCloudinary(req.file.path);

            user.studentAvatar.public_id = uploadedFile.public_id;
            user.studentAvatar.public_url = uploadedFile.public_url;

        }


    
        await user.save();
    
        return res
        .status(200)
        .json(new ApiResponse(200, 'Student updated successfully', user));
    
    
    } 
    catch (error) {
        
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }

    
});


const studentDelete = asyncHandler(async (req, res, next) => {

    const {studentEmail} = req.user;

    try {
    
       
        const student = await Student.findOneAndDelete({studentEmail});

        if (!student) {
            res.status(404).json({message: 'Student not found'});
        }

        return res
        .status(200)
        .json(new ApiResponse(200, 'Student deleted successfully', student));

        
    } 
    
    catch (error) {
        
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }

}); 



const getMyCourses = asyncHandler(async (req, res, next) => {    
    
    const {studentEmail} = req.user;
    
    try {
        const user = await Student.findOne({studentEmail});
        
        if(!user) {
            return res
            .status(400)
            .json(new ApiError(400, 'Invalid email or password'));
        }
        
        const courses = await Course.find({studentEmail});
        
        return res
        .status(200)
        .json(new ApiResponse(200, 'Student courses fetched successfully' , courses));
        
       
    }   
    catch (error) {
        
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }
});


const getLecturesByCourse = asyncHandler(async (req, res, next) => {    
    
    const {courseCode} = req.body;
    
    try {
        const lectures = await Lecture.find({courseCode});
        
        return res
        .status(200)
        .json(new ApiResponse(200, 'Lectures fetched successfully' , lectures));
        
       
    }   
    catch (error) {
        
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }
}); 




export {
    studentRegister,
    studentLogin,
    studentUpdate,
    studentDelete,




    /// course lectures
    getLecturesByCourse,
    getMyCourses
}