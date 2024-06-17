import express from 'express';
import studentRouter from '../src/routes/student.routes.js';


const allRouter = express.Router();






allRouter.use('/student', studentRouter)





export default allRouter;