const express = require("express");
const router = express.Router();
const {
getOrderListings,
placeOrder,
} = require("../controllers/orderController");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/orders/:vendorId", getOrderListings);

router.get("/placeOrder/:vendorId", placeOrder);

module.exports = router;