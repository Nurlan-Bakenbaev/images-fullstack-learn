const express = require("express");
const app = express();
const path = require("path");
app.use("/api", require("./routes/upload.route"));
app.
app.use(express.json({ extended: true }));
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server started ...");
});
