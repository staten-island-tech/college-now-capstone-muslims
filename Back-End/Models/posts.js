const mongoose = require("mongoose");
const slugify = require("slugify");

const postSchema = new mongoose.Schema({
  petName: {
    type: String,
    trim: true,
    required: true,
  },
  petAge: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  ownerName: {
    type: String,
    trim: true,
    required: true,
  },
  postImage: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: true,
  },
  animalType: {
    type: String,
    trim: true,
    required: true,
  },
  slug: String,
});

postSchema.pre("save", function (next) {
  if (!this.isModified("petName")) {
    next();
    return;
  }
  this.slug = slugify(this.petName, { lower: true });
  next();
});

module.exports = mongoose.model("post", postSchema);
