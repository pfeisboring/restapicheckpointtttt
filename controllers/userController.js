const user = require("../models/User");

exports.addUser = async (req, res) => {
  try {
    const findUser = await user.findOne({ email: req.body.email });
    if (findUser) {
      return res.status(400).send({ msg: "email already exists", findUser });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({ msg: "user added success", newUser });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find();
    res.status(200).send({ msg: "list of all users", allUsers });
  } catch (err) {
    res.status(500).send(err);
  }
};

//get ONE USER
exports.getOneUser = async (req, res) => {
  try {
    const oneUser = await user.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "desired user", oneUser });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const editedUser = await user.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "user updated success", editedUser });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deletedUsers = async (req, res) => {
  try {
    const deletedUser = await user.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "user deleted success" });
  } catch (err) {
    res.status(500).send(err);
  }
};
