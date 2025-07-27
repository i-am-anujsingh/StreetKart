const express = require("express");
const router = express.Router();
const {
postResaleItem,
getResaleListings,
buyResaleItem,
} = require("../controllers/resaleController");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/profile/resale", verifyToken, postResaleItem);
router.get("/listings", getResaleListings);
router.post("/buy/:id", verifyToken, buyResaleItem);

module.exports = router;