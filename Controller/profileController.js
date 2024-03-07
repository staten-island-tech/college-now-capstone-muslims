const userProfile = require("../Models/profile");

exports.createProfile = async (req, res) => {
  try {
    const profile = new userProfile(req.body);
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
