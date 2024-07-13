import { paymentInstance } from "../../../index.js";
import { Course } from "../../models/course.model.js";
import { Payment } from "../../models/payment.model.js";
import { Student } from "../../models/student.model.js";
import ApiError from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/apiResponse.js";

const createPaymentForCourse = asyncHandler(async (req, res) => {

    const {amount} = req.body;

    if(!amount){
        return res.status(400).json(new ApiError(400, "Amount is required"));
    }

    try {


        const order = await paymentInstance.orders.create({
            amount,
            currency: 'INR',
            
        })

        console.log(order);


        return res
            .status(200)
            .json(new ApiResponse(200, "Payment initiated successfully", order));


    } 
    catch (error) {

        console.log(error); 
        return res.status(500).json(new ApiError(500, error.message));
    }
})



const verifyPaymentForCourse = asyncHandler(async (req, res) => {
    
    const { paymentId } = req.body;

    try {

       const payment = await Payment.findById(paymentId);
       if (!payment) {
           return res.status(400).json(new ApiError(400, "Payment not found"));
       }
       payment.status = 'verified';
       await payment.save();


       

        // const student = await Student.findOne({ email: studentEmail });
        // if (!student) {
        //     return res.status(400).json(new ApiError(400, "Student not found"));
        // }

        // student.studentCourses.push(courseCode);

        // const checkCourse = await Course.findOne({ courseCode });
        

        // checkCourse.studentEmail.push(studentEmail);
        

        // const payment = await Payment.create({
        //     studentMail : studentEmail,
        //     courseCode,
        //     orderId,
        //     transactionId,
        //     transactionDate,
        //     amount,
        //     status : 'pending'
        // })


       return res
           .status(200)
           .json(new ApiResponse(200, "Payment verified successfully", payment));
    } 
    catch (error) {
       console.log(error);
       return res.status(500).json(new ApiError(500, error.message));
    }

})


export {createPaymentForCourse, verifyPaymentForCourse}