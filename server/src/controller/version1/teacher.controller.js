import {Teacher} from "../../models/teacher.model.js";
import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import bcrypt from "bcrypt";

const cookieOptions = {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,
    secure: true,
};



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
   
        const teacher = await Teacher.findOneAndDelete({teacherEmail});

        if(!user) {
            return res
            .status(400)
            .json(new ApiError(400, 'Invalid email or password'));
        }


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
   
    teacherUpdate,
    teacherDelete,
}