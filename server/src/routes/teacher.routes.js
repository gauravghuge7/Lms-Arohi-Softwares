import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { teacherDelete, teacherLogin, teacherRegister, teacherUpdate } from '../controller/version1/teacher.controller.js';

const teacherRouter = express.Router();

teacherRouter.route('/registerTeacher').post(
    upload.none(),
    teacherRegister
);

teacherRouter.route('/login').post(
    
    upload.none(),
    teacherLogin
);


teacherRouter.route('/update').patch(

    upload.none(),
    teacherUpdate
);

teacherRouter.route('/delete').post(
    
    
    teacherDelete
);





export default teacherRouter;