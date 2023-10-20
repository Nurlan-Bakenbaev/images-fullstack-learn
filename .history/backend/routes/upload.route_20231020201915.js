const { Router } = require("express");
const fileMiddleWare = require("../middleware/file");

const router = Router();
router.post("/upload", fileMiddleWare.sin, (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
