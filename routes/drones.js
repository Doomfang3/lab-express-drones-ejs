const express = require('express');
const router = express.Router();

// Connects to MongoDB
require('../db')

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  let theDrones = await Drone.find({})
  console.log({theDrones})
  res.render('../views/drones/list', {theDrones})
});

router.get('/drones/create', (req, res, next) => {
  res.render('../views/drones/create-form.ejs')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {const newDrone = await Drone.create(req.body)
  console.log(req.body)
  res.redirect("/drones")}
  catch (error) {
    res.redirect('/drones/create')
    console.log("error")
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  const drone = await Drone.findById(id)
  res.render('drones/update-form', { drone })
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  await Drone.findByIdAndUpdate(id, req.body)
  res.redirect('/drones')
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params
  await Drone.findByIdAndDelete(id)
  res.redirect('/drones')
});

module.exports = router;
