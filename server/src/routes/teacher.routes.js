import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { teacherDelete, teacherUpdate } from '../controller/version1/teacher.controller.js';

const teacherRouter = express.Router();




teacherRouter.route('/update').patch(

    upload.none(),
    teacherUpdate
);


teacherRouter.route('/getMyCourses').get(
    
)



teacherRouter.route('/getProfile').get(

)



teacherRouter.route('/delete').post(
    
    
    teacherDelete
);





export default teacherRouter;