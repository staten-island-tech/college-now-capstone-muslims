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

exports.homePage = (req, res) => {
  const stores = ["Dunkin", "Tim Hortons", "Starbucks"];
  try {
    console.log(req.name); //we get req.name from the middleware but WE MUST call it in index
    res.json([stores, req.name]); //if we want to send multiple "things" back to the user we need to use an array or object. Can't simply use , as that denotes status codes
  } catch (error) {
    console.log(error);
  }
};

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

exports.getProfile = async (req, res) => {
  try {
    const profile = await userProfile.find();
    res.json(profile);
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

exports.deleteProfile = async (req, res) => {
  try {
    const profile = await userProfile.findByIdAndDelete(req.params.id);
    if (!profile) {
      res.status(404).send();
    }
    res.send(`${profile} was removed`);
  } catch (error) {
    res.status(500).send(error);
  }
};
