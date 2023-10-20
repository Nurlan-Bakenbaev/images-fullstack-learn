const express = require("express");
const app = express();
const path = require("path");
const uploads = require("./routes/upload.route");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/api", uploads);
app.use("/images", express.static(path.join(__filenamed, "images")));
app.use(express.json({ extended: true }));
app.get("/api/upload", (req, res) => {
  res.send("Hello from upload");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server started ...");
});
