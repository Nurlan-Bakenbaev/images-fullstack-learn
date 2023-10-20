const { Router } = require("express");
const fileMiddleWare = require("");

const router = Router();
router.post("/upload", fileMiddleWare.single("avatar"), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
