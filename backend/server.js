const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/searchDB")
  .then((con) =>
    console.log(`Mongodb connected with server: ${con.connection.host}`)
  );

// Define the Ad schema
const adSchema = new mongoose.Schema({
  companyName: String,
  primaryText: String,
  headline: String,
  description: String,
  image: String,
});

// Get All Product
getAllProducts = async (req, res, next) => {
  const apiFeature = new ApiFeatures(Ad.find(), req.query).search();
  const ads = await apiFeature.query;

  res.status(200).json({ success: true, ads });
};
const Ad = mongoose.model("Ad", adSchema);
const ad = require("./productRoute");
const ApiFeatures = require("./apifeatures");

app.use("/api", ad);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
