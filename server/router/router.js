import express from 'express';
import studentRouter from '../src/routes/student.routes.js';
import teacherRouter from '../src/routes/teacher.routes.js';


const allRouter = express.Router();






allRouter.use('/student', studentRouter)  /// student routes

allRouter.use('/teacher', teacherRouter)  /// teacher routes





export default allRouter;