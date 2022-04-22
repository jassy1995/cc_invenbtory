const express = require("express");
let controller = require("../controllers/process.controller");
// let controller2 = require("../controllers/login.controller");
// const { authentication } = require("../middleware/auth");
// const upload = require("../util/multer");

const router = express.Router();

router.post("/register-author", controller.registerAuthor);
router.get("/authors", controller.Authors);
router.put("/update-author", controller.updateAuthor);
router.post("/create-inventory", controller.createInventory);
router.get("/inventories", controller.Inventory);
router.put("/update-inventory", controller.updateInventory);
router.get("/store", controller.inventoryInStore);
router.get("/market", controller.inventoryInMarket);
router.get("/occupied", controller.occupiedInventory);
router.post("/move-to-market", controller.moveInventoryToMarket);
router.post("/remove-from-market", controller.removeInventoryFromMarket);
router.post("/create-request", controller.createRequest);
router.get("/requests", controller.getRequest);
router.post("/set-to-occupied", controller.setPropertyAsOccupy);
router.post("/filter", controller.filterInventory);
// router.post("/multiple-file", upload.array("image"), controller1.multipleFile);
// router.post("/video", upload.single("video"), controller1.videoUpload);
// router.post("/audio", upload.single("audio"), controller1.audioUpload);
// router.post("/file", upload.single("image"), controller1.FileToCloudinary);

module.exports = router;
