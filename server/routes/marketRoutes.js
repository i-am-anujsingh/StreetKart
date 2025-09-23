const express = require("express");
const router = express.Router();
const {
getItems,
getItemById,
purchaseItem,
} = require("../controllers/marketController");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/items", getItems);
router.get("/item/:id", getItemById);
// router.post("/buy-items", verifyToken, purchaseItem);

module.exports = router;