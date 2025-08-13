const ResaleItem = require('../models/ResaleItem.js');

exports.postResaleItem = async (req, res) => {
  try {
    const { itemName, quantity, price, location, sellerId } = req.body;
    const resale = new ResaleItem({
      sellerId: sellerId,
      itemName: itemName,
      quantity: quantity,
      price: price,
      location: location,
      status: 'available',
      datePosted: new Date(),
    });
    await resale.save();
    res.status(201).json(resale);
  } catch (error) {
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

// exports.buyResaleItem = async (req, res) => {
//   try {
//     const resale = await ResaleItem.findById(req.params.id);
//     if (!resale || resale.status !== 'available') {
//       return res.status(400).json({ message: 'Item not available' });
//     }
// 
//     resale.status = 'sold';
//     await resale.save();
//     res.status(200).json({ message: 'Item purchased', resale });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// };
