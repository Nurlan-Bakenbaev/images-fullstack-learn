const express = require("express");
const app = express();
const path = require("path");
const uploads = require("./routes/upload.route");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173", // Update with your front-end's origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json({ extended: true }));

// Serve images from the "images" directory
app.use("/images", express.static(path.join(__dirname, "images")));

// Define a route for file uploads
app.use("/api", uploads);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server started...");
});
