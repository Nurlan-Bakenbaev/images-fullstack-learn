const express = require("express");
const app = express();
const path = require("path");
const uploads = require("./routes/upload.route");

const corsOptions = {
  origin: "http://localhost:5173/", // Replace with the actual domain of your front-end
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // You might need this for cookies and authentication
};
app.use(cors());
app.use("/api", uploads);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json({ extended: true }));
app.get("/api/upload", (req, res) => {
  res.send("Hello from upload");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server started ...");
});
