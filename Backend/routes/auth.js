import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = "your_secret_key";

//Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // if user already exits
    const userExits = await User.findOne({ $or: [{ username }, { email }] });
    if (userExits) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ userID: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User Created Succesfully", token });
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

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login Succesfull", token });
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
