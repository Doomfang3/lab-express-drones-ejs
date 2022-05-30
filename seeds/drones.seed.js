// Iteration #1
const mongoose = require("mongoose")

require('../db')
const DroneModel = require('../models/Drone.model')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
  ]

  async function entryDB() {
    try {
      await DroneModel.insertMany(drones)
      mongoose.connection.close()
      console.log("database created and disconnected")
    } catch(error) {
      console.log(error);
    }
    }

 entryDB()