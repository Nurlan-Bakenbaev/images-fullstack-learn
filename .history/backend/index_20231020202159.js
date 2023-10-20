const express = require("express");
const app = express();
const path = require
app.use("/api", require("./routes/upload.route"));

app.use(express.json({ extended: true }));
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server started ...");
});
