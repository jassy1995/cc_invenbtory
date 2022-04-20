require("dotenv").config();
const cloudinary = require("cloudinary").v2;

//single file

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });
// module.exports = cloudinary;

//multiple file
// const cloudinary = require("cloudinary");

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// exports.uploads = (file, folder) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(file, (result) => {
//       resolve(
//         {
//           image: result.secure_url,
//           image_id: result.public_id,
//         },
//         { resource_type: "auto", folder: folder }
//       );
//     });
//   });
// };

//audio
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
module.exports = cloudinary;
