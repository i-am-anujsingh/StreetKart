const Order = require('../models/Order.js');
const { ObjectId } = require('mongodb');
const Id = new ObjectId();
console.log(Id.toString());  // e.g., "64cfc3fcf1c2f40ffbf345a2"

exports.placeOrder = async (req, res) => {
  try {
    const { itemName, quantity, totalPrice } = req.body;
    const resale = new Order({
      vendorId: req.user.vendorId,
      itemId:Id,
      itemName,
      quantity,
      totalPrice,
      dateOfPurchase: new Date(),
    });
    await resale.save();
    res.status(201).json(resale);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getOrderListings = async (req, res) => {  
  try {  
    const { vendorId } = req.params;  
    const listings = await Order.find({ vendorId });  
    res.status(200).json(listings);  
  } catch (error) {  
    res.status(500).json({ message: 'Server error', error });  
  }  
};

