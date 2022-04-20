const express = require("express");
let controller1 = require("../controllers/patient.controller");
// let controller2 = require("../controllers/login.controller");
const { authentication } = require("../middleware/auth");
const upload = require("../util/multer");

const router = express.Router();

// router.post("/register-patient", controller1.registerPatient);
// router.post("/login-patient", controller2.loginPatient);
// router.post("/multiple-file", upload.array("image"), controller1.multipleFile);
// router.post("/video", upload.single("video"), controller1.videoUpload);
// router.post("/audio", upload.single("audio"), controller1.audioUpload);
// router.post("/file", upload.single("image"), controller1.FileToCloudinary);

module.exports = router;
