const cloudinary = require('cloudinary').v2; 
const fs = require('fs');

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Uploading the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        });

        // File has been uploaded successfully
        // console.log('File is uploaded successfully', response.url);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (err) {
        console.error('Upload failed:', err);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath); // Remove temporary file from local if the upload failed
        }
        return null;
    }
};


module.exports = uploadOnCloudinary