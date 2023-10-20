const { Router } = require("express");
const fileMiddleWare = require("../middleware/file");

const router = Router();
router.post("/upload", fileMiddleWare.single("avatar"), (req, res) => {
  try {
    if(re)
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
