const mongoose = require("mongoose");
const slugify = require("slugify");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a store name!",
  },
  description: {
    type: String,
    trim: true,
  },
  ownerName: {
    type: String,
    trim: true,
    required: "Please enter a the owner's name",
  },
  petPictures: {
    type: String,
  },
  location: {
    type: String,
    trim: true,
    required: "Please enter a location",
  },
  slug: String,
});
petSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("pet", petSchema);
