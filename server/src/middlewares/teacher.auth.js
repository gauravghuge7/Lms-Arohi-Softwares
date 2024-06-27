import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler';
import ApiError from '../utils/ApiError.js';

const isTeacherLogin = asyncHandler (async (req, res, next) => {

    const teacherToken = req.cookies.teacherToken;

    if(!teacherToken) {
        return res
        .status(401)
        .json(new ApiError(401, 'teacher is not logged in'));
    }

    try {

        const decoded = jwt.verify(teacherToken, process.env.JWT_SECRET);

        req.user = decoded;

        next();
        
        
    } 
    catch (error) {
        
        return res
        .status(401)
        .json(new ApiError(401, 'Invalid token or teacher is not logged in'));
    }

})

export default isTeacherLogin;