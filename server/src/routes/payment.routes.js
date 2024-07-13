import express from 'express';
import { createPaymentForCourse, verifyPaymentForCourse } from '../controller/version1/payment.controller.js';

const paymentRouter = express.Router();



paymentRouter.route('/createPaymentForCourse').post(
    createPaymentForCourse
)


paymentRouter.route('/verifyPaymentForCourse').post(
    verifyPaymentForCourse
)


export default paymentRouter;