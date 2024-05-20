const mongoose = require("mongoose");
const slugify = require("slugify");

const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    trim: true,
    required: "Please enter a your pet's name!",
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
  state: {
    type: String,
    trim: true,
    required: "Please enter a state",
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
