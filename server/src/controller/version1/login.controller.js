import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/apiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import bcrypt from "bcrypt";

import {Student, Teacher, Admin} from "../../models/export/export.model.js";

const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
    secure: true
}





const loginUser = asyncHandler(async (req, res) => {

    const { studentEmail, studentPassword } = req.body;

    

    if(!studentEmail || !studentPassword ) {
        return res
            .status(400)
            .json(new ApiError(400, "Email and Password are required"));
    }
    
    try {

        /// find this is student or not

        const student = await Student.findOne({ studentEmail }).select("+studentPassword");
        console.log(student)
        if(student) {

            const comparePassword = await bcrypt.compare(studentPassword, student.studentPassword);
            console.log(comparePassword)
            if(!comparePassword) {
                return res
                    .status(400)
                    .json(new ApiError(400, "Email or Password is incorrect to find in servers"));
            }

            const studentToken = student.generateStudentLogin();
            

            return res
                .status(200)
                .cookie("studentToken", studentToken, cookieOptions)
                // .redirect('/studentDashboard')
                .json(new ApiResponse(201, "Student login successfully", student));
        }



        /// find this teacher or not 

        const teacher = await Teacher.findOne({ teacherEmail:studentEmail }).select("-teacherPassword");

        if(teacher) {
          
            const comparePassword = await bcrypt.compare(teacherPassword, teacher.teacherPassword);

            if(!comparePassword) {
                return res
                    .status(400)
                    .json(new ApiError(400, "Email or Password is incorrect to find in servers"));
            }

            const teacherToken = teacher.generateTeacherLogin();

            return res 
                .status(400)
                .cookie("teacherToken", teacherToken, cookieOptions)
                .redirect('/teacherDashboard')
                .json(new ApiResponse(400, "Teacher login successfully", teacher));
        }


        const admin = await Admin.findOne({ adminEmail : studentEmail }).select("-adminPassword");

        if(admin) {
            
            const comparePassword = await bcrypt.compare(adminPassword, admin.adminPassword);

            if(!comparePassword) {
                return res
                    .status(400)
                    .json(new ApiError(400, "Email or Password is incorrect to find in servers"));
            }

            const adminToken = admin.generateAdminLogin();

            return res 
                .status(400)
                .cookie("adminToken", adminToken, cookieOptions)
                .redirect('/admin')
                .json(new ApiResponse(400, "Admin login successfully", admin));
        }




        return res
            .status(200)
            .json(new ApiResponse(404, "Email or Password is incorrect to find in servers"));
        
    } 
    catch (error) {
        console.log("error => ", error);
        return res
            .status(400)
            .json(new ApiError(400, error.message));
    }

})


export {
    loginUser
}