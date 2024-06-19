import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/apiResponse.js';

const isAdminLogin = (req, res, next) => {

    console.log("frontend cookies => ",req.cookies); 
    console.log("frontend headers => ",req.header("Authorization"));

    const adminToken = req.cookies?.adminToken || req.header("Authorization")?.replace("Bearer ", "");





    if(!adminToken) {
        return res
        .status(401)
        .json(new ApiResponse(401, 'Unauthorized token user not found'));
    }

    try {

        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } 
    catch (error) {
        console.log(error);
        return res
        .status(401)
        .json(new ApiError(401, 'Unauthorized'));
    }    
}

export default isAdminLogin;