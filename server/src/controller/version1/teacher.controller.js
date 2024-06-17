import {Teacher} from "../../models/teacher.model.js";
import ApiError from "../../utils/apiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import bcrypt from "bcrypt";

const cookieOptions = {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,
    secure: true,
};


const teacherRegister = asyncHandler(async (req, res) => {

    const {teacherFullName, teacherAge, teacherGender, teacherEmail, teacherPassword, teacherPhoneNumber, teacherSubjects} = req.body;

    if(!teacherFullName || !teacherAge || !teacherGender || !teacherEmail || !teacherPassword || !teacherPhoneNumber || !teacherSubjects) {

        return res
        .status(400)
        .json(new ApiError(400, 'Missing required fields'));
    }

    try {
        const user = await Teacher.findOne({teacherEmail: teacherEmail});
    
        if(user) {
            return res
            .status(400)
            .json(new ApiError(400, 'Email already exists'));
        }
    
        const hashedPassword = await bcrypt.hash(teacherPassword, 10);
    
        const newUser = new Teacher({
            teacherFullName,
            teacherAge,
            teacherGender,
            teacherEmail,
            teacherPassword: hashedPassword,
            teacherPhoneNumber,
            teacherSubjects,
        });
    
        await newUser.save();
    
        return res
        .status(200)
        .json(new ApiResponse(200, 'Teacher registered successfully', newUser));
    
       
    } 
    
    catch (error) {
        
        return res 
        .status(500)
        .json(new ApiError(500, error.message));
    }
});


const teacherLogin = asyncHandler(async (req, res) => {

    const {teacherEmail, teacherPassword} = req.body;

    if(!teacherEmail || !teacherPassword) {

        return res
        .status(400)
        .json(new ApiError(400, 'Missing required fields'));
    }

    try {
        const user = await Teacher.findOne({teacherEmail: teacherEmail});

        if(!user) {
            return res
            .status(400)
            .json(new ApiError(400, 'Invalid email or password'));
        }

        const isValidPassword = await bcrypt.compare(teacherPassword, user.teacherPassword);

        if(!isValidPassword) {
            return res
            .status(400)
            .json(new ApiError(400, 'Invalid email or password'));
        }

        const teacherToken = await user.generateTeacherLogin();

        return res
        .status(200)
        .json(new ApiResponse(200, 'Teacher logged in successfully', token));

       
    }   

    catch (error) {
        
        return res 
        .status(500)
        .json(new ApiError(500, error.message));
    }

});

const teacherUpdate = asyncHandler(async (req, res) => {

    const {teacherEmail} = req.user;

    const {teacherFullName, teacherAge, teacherGender, teacherPhoneNumber, teacherSubjects} = req.body;

    try {
   
        const user = await Teacher.findOne({teacherEmail: teacherEmail});

        if(!user) {
            return res
            .status(400)
            .json(new ApiError(400, 'Invalid email or password'));
        }

        if(teacherFullName) {
            user.teacherFullName = teacherFullName;
        }

        if(teacherAge) {
            user.teacherAge = teacherAge;
        }

        if(teacherGender) {
            user.teacherGender = teacherGender;
        }

        if(teacherPhoneNumber) {
            user.teacherPhoneNumber = teacherPhoneNumber;
        }

        if(teacherSubjects) {
            user.teacherSubjects = teacherSubjects;
        }

        await user.save();

        return res
        .status(200)
        .json(new ApiResponse(200, 'Teacher profile updated successfully', user));


        
    } 
    catch (error) {
        
        return res 
        .status(500)
        .json(new ApiError(500, error.message));
    }

});

const teacherDelete = asyncHandler(async (req, res) => {

    const {teacherEmail} = req.user;

    try {
   
        const user = await Teacher.findOne({teacherEmail: teacherEmail});

        if(!user) {
            return res
            .status(400)
            .json(new ApiError(400, 'Invalid email or password'));
        }

        await user.delete();

        return res
        .status(200)
        .json(new ApiResponse(200, 'Teacher deleted successfully', user));


        
    } 
    catch (error) {
        
        return res 
        .status(500)
        .json(new ApiError(500, error.message));
    }

});

export {
    teacherRegister,
    teacherLogin,
    teacherUpdate,
    teacherDelete,
}