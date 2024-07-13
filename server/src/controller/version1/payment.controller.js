import { Course } from "../../models/course.model";
import { Payment } from "../../models/payment.model";
import { Student } from "../../models/student.model";
import ApiError from "../../utils/ApiError";
import { asyncHandler } from "../../utils/asyncHandler";


const createPaymentForCourse = asyncHandler(async (req, res) => {

    const { courseCode, payment } = req.body;

    
    const {studentEmail} = req.user;

    try {

        const student = await Student.findOne({ email: studentEmail });
        if (!student) {
            return res.status(400).json(new ApiError(400, "Student not found"));
        }

        student.studentCourses.push(courseCode);

        const checkCourse = await Course.findOne({ courseCode });
        

        checkCourse.studentEmail.push(studentEmail);
        

        const payment = await Payment.create({
            studentMail : studentEmail,
            courseCode,
            orderId,
            transactionId,
            transactionDate,
            amount,
            status : 'pending'
        })

        

        return res
            .status(200)
            .json(new ApiResponse(200, "Payment initiated successfully", payment));

        
    } 
    catch (error) {
        console.log(error); 
        return res.status(500).json(new ApiError(500, error.message));
    }
})