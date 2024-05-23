const mongoose = require("mongoose");
const slugify = require("slugify");

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  state: {
    type: String,
    trim: true,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: Buffer,
    required: true,
  },
  petPictures: {
    type: Buffer,
    required: true,
  },
  slug: String,
});

profileSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("profile", profileSchema);
