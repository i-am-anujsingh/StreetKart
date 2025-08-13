const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  dateOfPurchase: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);