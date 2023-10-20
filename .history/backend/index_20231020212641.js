const express = require("express");
const app = express();
const path = require("path");
app.use("/api", require("./routes/upload.route"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json({ extended: true }));
res.send("Hello from upload");
const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server started ...");
});
