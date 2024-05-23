const userProfile = require("../Models/profile");
const multer = require("multer");
const multerOptions = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "Uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
  fileFilter: function (req, file, next) {
    //can also set limit in multer
    const isPhoto = file.mimetype.startsWith("image/");
    if (isPhoto) {
      next(null, true); //callback function, first value is error, second value gets passed on if no error
    } else
      ({
        message: "That filetype is not allowed",
      }),
        false;
  },
};
exports.upload = multer(multerOptions).single("photo");

exports.createProfile = async (req, res) => {
  try {
    const profile = new userProfile(req.body);
    shop.photo = req.file.path;
    await profile.save();
    res.json([profile]);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await userProfile.findById(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (profile[update] = req.body[update]));
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.log(error);
  }
};
