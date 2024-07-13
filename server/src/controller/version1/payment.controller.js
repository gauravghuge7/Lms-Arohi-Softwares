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

        const checkCourse = await Course.findOne({ courseCode });
        
        
        const course = await Course.create({

            courseCode,
            studentEmail,

            
        })

        const payment = await Payment.create({
            studentMail : studentEmail,
            courseCode,
            orderId,
            transactionId,
            transactionDate,
            amount,
            status : 'pending'
        })

        

        
    } 
    catch (error) {
        console.log(error); 
        return res.status(500).json(new ApiError(500, error.message));
    }
})