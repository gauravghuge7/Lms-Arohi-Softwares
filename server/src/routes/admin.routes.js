import express from 'express';
import { Admin } from '../models/admin.model.js';
import { loginAdmin, logoutAdmin, registerAdmin, updateAdmin } from '../controller/version1/admin.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import isAdminLogin from '../middlewares/admin.auth.js';
import { createCourse } from '../controller/version1/course.controller.js';

const adminRouter = express.Router();



adminRouter.route('/register').post(

    upload.none(),
    registerAdmin,
)


adminRouter.route('/login').post(

    upload.none(),
    loginAdmin
)


adminRouter.route('/updateAdmin').post(

    isAdminLogin,
    upload.none(),
    updateAdmin

)





adminRouter.route('/logout').get(

    isAdminLogin,
    upload.none(),
    logoutAdmin
)





export default adminRouter;
