import express from 'express';

const courseRouter = express.Router();

import { createCourse, deleteCourse, updateCourse } from '../controller/version1/course.controller.js';
import isAdminLogin from '../middlewares/admin.auth.js';
import { upload } from '../middlewares/multer.middleware.js';





courseRouter.route('/createCourse').post(

    
    upload.none(),
    createCourse
)



courseRouter.route('/updateCourse').post(
    upload.none(),
    updateCourse
)


courseRouter.route('/deleteCourse').post(
    
    isAdminLogin,
    upload.none(),
    deleteCourse
)



export default courseRouter;