import express from 'express';
import studentRouter from '../src/routes/student.routes.js';
import teacherRouter from '../src/routes/teacher.routes.js';
import adminRouter from '../src/routes/admin.routes.js';
import courseRouter from '../src/routes/course.routes.js';


const allRouter = express.Router();






allRouter.use('/student', studentRouter)  /// student routes

allRouter.use('/teacher', teacherRouter)  /// teacher routes

allRouter.use('/admin', adminRouter)  /// admin routes

allRouter.use('/course', courseRouter)  /// course routes



export default allRouter;