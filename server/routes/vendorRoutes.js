const express = require("express");
const router = express.Router();
const {
updateVendorProfile,
getAllVendors,
} = require("../controllers/vendorController");
const verifyToken = require("../middlewares/authMiddleware");

router.put("/update", updateVendorProfile);
router.get("/all", getAllVendors); // optional

module.exports = router;