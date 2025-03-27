const express = require("express");
const multer = require("multer");
const User = require("../models/User"); // Import your User Model
const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // Save images in 'uploads' folder
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Route to handle profile image upload
router.post("/upload", upload.single("profileImage"), async (req, res) => {
  const { email } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;

  // Update user profile in database
  const user = await User.findOneAndUpdate(
    { email },
    { profileImage: imageUrl },
    { new: true }
  );

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(400).json({ success: false, message: "User not found" });
  }
});

module.exports = router;
