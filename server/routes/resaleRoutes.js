const express = require("express");
const router = express.Router();
const {
postResaleItem,
getResaleListings,
//buyResaleItem,
} = require("../controllers/resaleController");
// const verifyToken = require("../middlewares/authMiddleware");

router.post("/createresale", postResaleItem);
router.get("/listings", getResaleListings);
//router.post("/buy/:id", verifyToken, buyResaleItem);

module.exports = router;