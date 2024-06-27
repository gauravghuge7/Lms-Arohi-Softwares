import { Admin } from '../../models/admin.model.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import bcrypt from 'bcrypt';
import ApiError from '../../utils/ApiError.js';
import ApiResponse from '../../utils/apiResponse.js';

const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
    secure: true
}



const registerAdmin = asyncHandler(async (req, res) => {

    
    const {adminName, adminEmail, adminPhoneNumber, adminPassword} = req.body;

    if(!(adminName, adminEmail, adminPhoneNumber, adminPassword )) {

        return res
        .status(400)
        .json(new ApiResponse(405, 'Please provide all the required fields'));
    }

    try {
        const user = await Admin.findOne({adminEmail});
    
        if(user) {
            return res
            .status(400)
            .json(new ApiError(405, 'Admin with this email already exists'));
        }
    
        const encryptedPassword = await bcrypt.hash(adminPassword, 10);
    
        const savedAdmin = await Admin.create({
            adminName,
            adminEmail,
            adminPhoneNumber,
            adminPassword: encryptedPassword,
            isActive: true,
        });
    
        return res
            .status(201)
            .json(new ApiResponse(201, 'Admin created successfully', savedAdmin));
    
    } 
    catch (error) {
        
        console.log(error);
        return res
        .status(400)
        .json(new ApiError(400, error.message));
        
    }

});


const loginAdmin = asyncHandler(async (req, res) => {

    console.log();
    const {adminEmail, adminPassword} = req.body;

    if(!adminEmail || !adminPassword) {
        return res
        .status(400)
        .json(new ApiError(400, 'Admin data is missing', req.body));
    }

    try {
    
        const user = await Admin.findOne({adminEmail});

        if(!user) {
            return new ApiError(400, 'Admin with this email already exists');
        }

        const isMatch = await bcrypt.compare(adminPassword, user.adminPassword);

        if (!isMatch) {
            return new ApiError(401, 'Invalid password for this admin');
        }

        const adminToken = user.generateAdminLogin();

        console.log("admin token => ", adminToken);

        return res
        .status(200)
        .cookie("adminToken", adminToken, cookieOptions)
        .json(new ApiResponse(200, 'Admin login successfully', user));

        
    } 
    catch (error) {
        
        console.log(error);
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }

});

const updateAdmin = asyncHandler(async (req, res) => {

    const {adminEmail} = req.user;

    const { adminName, adminPhoneNumber, adminCources} = req.body;

    try {    
        const user = await Admin.findOne({adminEmail: adminEmail});
    
        if(adminName) {
    
            user.adminName = adminName;
            
        }
    
        if(adminPhoneNumber) {
    
            user.adminPhoneNumber = adminPhoneNumber;
            
        }
    
        if(adminCources) {
    
            user.adminCources = adminCources;
            
        }

        if(req.file) {

            const uploadedFile = await uploadOnCloudinary(req.file.path);

            user.adminAvatar.public_id = uploadedFile.public_id;
            user.adminAvatar.public_url = uploadedFile.public_url;

        }


    
        await user.save();
    
        return res
        .status(200)
        .json(new ApiResponse(200, 'Admin updated successfully', user));
    
    
    } 
    catch (error) {
        
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }

    
});


const logoutAdmin = asyncHandler(async (req, res) => {

    const {adminToken} = req.user;
    
    console.log(adminToken);

    try {

        if(!adminToken) {
            return res
            .status(400)
            .json(new ApiError(400, 'Admin token not found'));
        }


        return res
        .status(200)
        .cookie("adminToken", null, cookieOptions)
        .json(new ApiResponse(200, 'Admin logout successfully'));


    } 
    catch (error) {
        
        return res
        .status(400)
        .json(new ApiError(400, error.message));
    }

})





export {
    registerAdmin,
    loginAdmin,
    updateAdmin,
    logoutAdmin
}