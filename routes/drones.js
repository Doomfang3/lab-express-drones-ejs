const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const list = await Drone.find()
    res.render('drones/list', { list })
  } catch(err){
    console.log(err)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    const newDrone = await Drone.create(req.body)
    res.redirect('/drones')
  } catch(err) {
    console.log(err)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const one = await Drone.findById(req.params.id)
    res.render('drones/update-form', { one })
  } catch (err) {
    console.log(err)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const update = await Drone.findByIdAndUpdate({_id: req.params.id}, req.body)
    res.redirect('/drones')
  } catch(err) {
    console.log(err)
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const deleted = await Drone.findByIdAndDelete(req.params.id)
    res.redirect('/drones')
  } catch(err) {
    console.log(err)
  }
});

module.exports = router;
