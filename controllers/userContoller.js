const User = require("../Models/userSchema");
const bcrypt = require("bcrypt");
const saltround = 10;

// Get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
}

// Get a single user by ID
async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
}

// Add a new user
async function addUser(req, res) {
  try {
    const hash = bcrypt.hashSync(req.body.password, saltround);
    const data = req.body;

    const user = await User.create({ ...data, password: hash });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
}

// Update an existing user
async function updateUser(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error });
  }
}

// Delete a user
async function deleteUser(req, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
