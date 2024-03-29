const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "images/");
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString() + '-'+ file.originalname);
  },
});

const types = ['image/png','image/jpeg','image/jpeg']
