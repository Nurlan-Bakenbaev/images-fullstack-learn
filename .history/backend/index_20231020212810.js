const express = require("express");
const app = express();
const path = require("path");
const uploads = require("./routes/upload.route");
app.use("/api",uploads);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json({ extended: true }));
app.get("/api/upload", (req, res) => {
  res.send("Hello from upload");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server started ...");
});
