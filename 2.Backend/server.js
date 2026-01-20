const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/rental_platform")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Property schema
const PropertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  type: String, // Room / House / PG
  amenities: [String],
  ownerName: String,
});

const Property = mongoose.model("Property", PropertySchema);

// Add property
app.post("/add-property", async (req, res) => {
  const property = new Property(req.body);
  await property.save();
  res.send({ message: "Property added successfully" });
});

// Get all properties
app.get("/properties", async (req, res) => {
  const data = await Property.find();
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
