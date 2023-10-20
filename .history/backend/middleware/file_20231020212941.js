const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "images/");
  },
  filename(req, file, cb) {
    const datePart = new Date().toISOString().replace(/[:.]/g, "-");
    cb(null, datePart + "-" + file.originalname);
  },
});

const types = ["image/png", "image/jpeg", "image/jpg"];
const fileFilter = (req, file, cb) => {
   {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer(storage, fileFilter);
