const mongoose = require("mongoose");
const slugify = require("slugify");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a user name!",
  },
  description: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
    required: "Please enter your location",
  },
  contactInfo: {
    type: String,
    required: "Please at least an email or a phone number",
  },
  profilePicture: {
    type: Buffer,
  },
  petPictures: {
    type: Buffer,
  },
  slug: String,
});

userSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("user", userSchema);
