const Vendor = require('../models/Vendor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

exports.registerVendor = async (req, res) => {
  try {
    const { name, phone, password, language, location } = req.body;

    const existingVendor = await Vendor.findOne({ phone });
    if (existingVendor) {
      return res.status(400).json({ message: 'Phone already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newVendor = new Vendor({ name, phone, password: hashedPassword, language, location });
    await newVendor.save();

    res.status(201).json({ message: 'Vendor registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.loginVendor = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const vendor = await Vendor.findOne({ phone });
    if (!vendor) return res.status(400).json({ message: 'Vendor not found' });

    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

    const token = jwt.sign({ vendorId: vendor._id }, JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      message: 'Login successful',
      token,
      vendor: {
        id: vendor._id,
        name: vendor.name,
        phone: vendor.phone,
        language: vendor.language,
        location: vendor.location,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getVendorProfile = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.user.vendorId).select('-password');
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
