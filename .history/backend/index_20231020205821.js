const express = require("express");
const app = express();
const path = require("path");
app.use("/api", require("./routes/upload.route"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json({ extended: true }));
const PORT = 000;
app.listen(PORT, () => {
  console.log("Server started ...");
});
