const ResaleItem = require('../models/ResaleItem.js');

exports.postResaleItem = async (req, res) => {
  console.log("Incoming resale data:", req.body);

  const { itemName, quantity, price, location } = req.body;

  try {
    const newResale = new ResaleItem({
      itemName,
      quantity,
      price,
      location,
      description: 'NA',
      status: 'available',
      datePosted: new Date(),
    });

    await newResale.save();
    res.status(201).json(newResale);
  } catch (error) {
    console.error("\n\nError saving resale item:", error);
    res.status(500).json({ message: 'Server error', error });
  }
};


exports.getResaleListings = async (req, res) => {
  try {
    const listings = await ResaleItem.find({ status: 'available' });
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
