const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String // URL to image
  },
  pricePerKg: {
    type: Number,
    required: true
  },
  availableQty: {
    type: Number,
    required: true
  },
  supplierName: {
    type: String
    // Optional for now, could be linked to a Supplier model in future
  },
  category: {
    type: String // e.g., "vegetables", "spices"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Item', itemSchema);