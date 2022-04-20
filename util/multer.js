const multer = require("multer");
const path = require("path");
// Multer config
//single file upload
// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("File type is not supported"), false);
//       return;
//     }
//     cb(null, true);
//   },
// });

//multiple file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../uploads/"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/png"
//   ) {
//     cb(null, true);
//   } else {
//     cb({ message: "unsupported image format" }, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1024 * 1024 },
//   fileFilter: fileFilter,
// });

// module.exports = upload;

//=========audio upload==========
// const storage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     const fileExt = file.originalname.split(".").pop();
//     const filename = `${new Date().getTime()}.${fileExt}`;
//     cb(null, filename);
//   },
// });

// Filter the file to validate if it meets the required audio extension
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg") {
//     cb(null, true);
//   } else {
//     cb(
//       {
//         message: "Unsupported File Format",
//       },
//       false
//     );
//   }
// };

// // Set the storage, file filter and file size with multer
// const upload = multer({
//   storage,
//   limits: {
//     fieldNameSize: 200,
//     fileSize: 5 * 1024 * 1024,
//   },
//   fileFilter,
// });

// module.exports = upload;

//==========video upload========
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const fileExt = file.originalname.split(".").pop();
    const filename = `${new Date().getTime()}.${fileExt}`;
    cb(null, filename);
  },
});

// Filter the file to validate if it meets the required video extension
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "video/mp4") {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported File Format",
      },
      false
    );
  }
};

// Set the storage, file filter and file size with multer
const upload = multer({
  storage,
  limits: {
    fieldNameSize: 200,
    fileSize: 30 * 1024 * 1024,
  },
  fileFilter,
});

module.exports = upload;
