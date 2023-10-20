const express = require("express");
const app = express();
app.use("/api", require("./routes/upload.route"));

app.use(express.json({exte}))
const PORT = 5000
app.listen(PORT,()=>{
    console.log("Server started ...")
})