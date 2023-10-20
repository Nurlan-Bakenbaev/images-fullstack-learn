const express = require("express");
const app = express();
app.use("/api", require("./routes/upload.route"));


const PORT = 5000
app.listen(PORT)