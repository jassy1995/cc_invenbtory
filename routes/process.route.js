const express = require("express");
let controller = require("../controllers/process.controller");
// let controller2 = require("../controllers/login.controller");
// const { authentication } = require("../middleware/auth");
// const upload = require("../util/multer");

const router = express.Router();

router.post("/register-author", controller.registerAuthor);
router.post("/create-inventory", controller.createInventory);
router.get("/authors", controller.Authors);
router.get("/inventories", controller.Inventory);
// router.post("/multiple-file", upload.array("image"), controller1.multipleFile);
// router.post("/video", upload.single("video"), controller1.videoUpload);
// router.post("/audio", upload.single("audio"), controller1.audioUpload);
// router.post("/file", upload.single("image"), controller1.FileToCloudinary);

module.exports = router;
