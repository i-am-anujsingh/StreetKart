const mongoose = require('mongoose');

const resaleItemSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
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
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default:null
    // Optional note about the item
  },
  location: {
    type: String
    // For nearby filtering, optional
  },
  image: {
    type: String,
    default:null
    // Optional image URL
  },
  status: {
    type: String,
    enum: ['available', 'sold'],
    default: 'available'
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ResaleItem', resaleItemSchema);