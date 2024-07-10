import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



const thumbnailUploadOnCloudinary = (path) => {
    try {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(path, (error, result) => {

                path: '/uploads/thumbnails';
                resource_type: auto;

                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    } 
    catch (error) {
        console.log(error);
        return error.message;
    }

}



const lectureUploadOnCloudinary = async(path) => {
    try {
        
        const response = await cloudinary.uploader.upload(path, {
            
            path: '/uploads/lectures',
            resource_type: 'video',
            transformation: {
                quality: 'auto',
                fetch_format: 'auto',
                crop: 'limit',
                width: 1280,
                height: 720,
                aspect_ratio: '16:9',
                gravity: 'auto',
                radius: 0,
                background: 'transparent',
     
            }
        })

        console.log(response);

        return response;



    } 
    catch (error) {
        console.log(error);
        return error.message;
    }
}



export {
    thumbnailUploadOnCloudinary, 
    lectureUploadOnCloudinary
};