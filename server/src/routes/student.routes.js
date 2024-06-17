import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { studentDelete, studentLogin, studentRegister, studentUpdate } from '../controller/version1/student.controller.js';

const studentRouter = express.Router();




studentRouter.route('/register').post(
    upload.none(),
    studentRegister
);


studentRouter.route('/login').post(
    
    upload.none(),
    studentLogin

);


studentRouter.route('/update').put(

    upload.none(),
    studentUpdate
);


studentRouter.route('/delete').delete(
    
    upload.none(),
    studentDelete

);





export default studentRouter;