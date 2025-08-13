const Item = require('../models/Item.js');


exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      message:"Item fetched successfully",
      items
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
