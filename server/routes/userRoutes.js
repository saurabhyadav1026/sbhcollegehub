
import express from "express";
import User from "../models/user.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
   // res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

export default router;
