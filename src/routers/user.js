const express = require("express");
const User = require("../models/user");
const router = new express.Router();

//Creating new profile/user
router.post("/users/createProfile", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Listing all the profiles/users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    console.log(user);
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Listing all profiles/users with status = "Pause"
router.get("/users/PausedProfiles", async (req, res) => {
  try {
    const user = await User.find({ status: "Pause" });
    if (!user) {
      return res.status(404).send();
    }
    console.log(user);
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

//Updating status of user (selecting user with id)
router.patch("/users/changeStatus/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      //if Profile not present
      return res.status(404).send();
    }
    console.log(user);
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Deleting profile/user
router.delete("/users/deleteProfile/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    console.log("deleted profile successfully");
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
