const express = require("express");
const router = express.Router();
const {
registerVendor,
loginVendor,
getVendorProfile,
} = require("../controllers/authController");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/register", registerVendor);
router.post("/login", loginVendor);
router.get("/profile", verifyToken, getVendorProfile);

module.exports = router;