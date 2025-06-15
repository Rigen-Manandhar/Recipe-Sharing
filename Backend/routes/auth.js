import express from "express";
import User from "../models/User.js";

const router = express.Router();

//Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User Created Succesfully" });
  } catch (err) {
    res.status(400).json({ message: "Error creating the User" });
  }
});

//Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    res.status(200).json({ message: "Login Succesfull" });
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
