const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
    // Optional – can be hashed or used for OTP-based login
  },
  language: {
    type: String,
    enum: ['en', 'hi'], // You can extend this list
    default: 'en'
  },
  location: {
    type: String
    // Optional field
  },
  resaleListings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ResaleItem'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vendor', vendorSchema);