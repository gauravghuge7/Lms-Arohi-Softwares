import express from 'express';

const courseRouter = express.Router();

import { createCourse, deleteCourse, updateCourse, uploadLectures } from '../controller/version1/course.controller.js';
import isAdminLogin from '../middlewares/admin.auth.js';
import { upload } from '../middlewares/multer.middleware.js';
import isTeacherLogin from '../middlewares/teacher.auth.js'
import { lectureUpload } from '../middlewares/lecture.middleware.js';





courseRouter.route('/createCourse').post(

    isAdminLogin,
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




courseRouter.route('/uploadLectures').post(
    
    isTeacherLogin,
    lectureUpload.single('lecture'),
    uploadLectures
)



export default courseRouter;