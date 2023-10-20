const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images"); // Specify the destination folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });

// Define a POST route to handle file upload
router.post("/upload", upload.single("avatar"), (req, res) => {
  // File has been successfully uploaded and saved in the "images" directory
  res.json({ message: "File uploaded successfully." });
});

module.exports = router;
