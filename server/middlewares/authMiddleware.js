const jwt = require("jsonwebtoken");

// Replace this with a real secret from environment variables in production
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Make sure the token contains vendor ID
    if (!decoded.vendorId) {
      return res.status(403).json({ message: "Invalid token: No vendor ID" });
    }

    // Attach vendor info to request
    req.user = {
      vendorId: decoded.vendorId,
    };

    next(); // Token valid — proceed to controller
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = verifyToken;