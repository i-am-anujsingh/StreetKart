exports.updateVendorProfile = async (req, res) => {
  try {
    const { name, language, location } = req.body;
    const updatedVendor = await Vendor.findByIdAndUpdate(
      req.user.vendorId,
      { name, language, location },
      { new: true }
    ).select('-password');

    res.status(200).json(updatedVendor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().select('name phone language location');
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
