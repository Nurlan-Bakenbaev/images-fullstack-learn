const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, res, cb) {
    cb(null, "images/");
  },
  filename(req,res,file)
});