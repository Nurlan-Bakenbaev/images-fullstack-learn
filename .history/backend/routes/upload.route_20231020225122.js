const { Router } = require("express");
const fileMiddleWare = require("../middleware/file");

const router = Router();
router.post("/upload", fileMiddleWare.single("avatar"), (req, res) => {
  try {
    if (req.file) {
      
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});
module.exports = router;
