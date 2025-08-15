const mongoose = require('mongoose');

const resaleItemSchema = new mongoose.Schema({
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
    default:'NA'
    // Optional note about the item
  },
  location: {
    type: String,
    default:'NA'
    // For nearby filtering, optional
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