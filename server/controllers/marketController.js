const Item = require('../models/Item.js');
const Order = require('../models/Order.js');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
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

exports.purchaseItem = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    const item = await Item.findById(itemId);
    if (!item || item.availableQty < quantity)
      return res.status(400).json({ message: 'Insufficient stock' });

    item.availableQty -= quantity;
    await item.save();

    const order = new Order({
      vendor: req.user.vendorId,
      item: itemId,
      itemName: item.name,
      quantity,
      totalPrice: item.pricePerKg * quantity,
      purchaseDate: new Date(),
    });
    await order.save();

    res.status(201).json({ message: 'Order placed', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};