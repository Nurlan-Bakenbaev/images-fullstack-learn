const { Router } = require("express");
const fileMiddleWare = require("../middleware/file");

const router = Router();
router.post("/upload", fileMiddleWare.single("avatar"), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
    res.json(eroor)
  }
});
module.exports = router;
