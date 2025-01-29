const express = require('express');
const router = express.Router();
const recycle = require('../models/recycle');


router.post("/recycleItems", async (req, res) => {
    try {
      await recycle.create({
        name: req.body.name,
        price: req.body.price,
        email: req.body.email,
      });
      res.json({ success: true, message: 'Item price created successfully' });
    } catch (error) {
      if (error.name === 'ValidationError') {
        // Handle validation errors
        const validationErrors = Object.values(error.errors).map(err => err.message);
        res.status(400).json({ success: false, errors: validationErrors });
      } else {
        // Handle other types of errors
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to create item price' });
      }
    }
  });

  router.get('/getpricesRecycle', async (req, res) => {
    try {
      const prices = await recycle.find({}, 'name price email rewardPoints status');
      res.json({ success: true, prices });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  });

  
router.post("/updatepointsRecycle", async (req, res) => {
    try {
      const { email, points } = req.body;
  
      const updatedUser = await recycle.findOneAndUpdate(
        { email },
        { $inc: { rewardPoints: points || 0 } }, // Use default value if rewardPoints doesn't exist
        { new: true }
      );
  
      res.json({ success: true, user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  });

  router.post('/updatestatusRecycle', async (req, res) => {
    try {
      const { email } = req.body;
  
      // Find the user by email and update the Status field to "approved"
      const updatedUser = await recycle.findOneAndUpdate(
        { email },
        { $set: { Status: 'approved' } },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      return res.json({ success: true, user: updatedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  });
  module.exports = router;