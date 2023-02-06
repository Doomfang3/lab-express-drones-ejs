// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const Drone = require('../models/Drone.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const dronesArr = [
    {
        name: 'Creeper XL',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'Turbo Drone XL',
        propellers: 8,
        maxSpeed: 60
    },
    {
        name: 'Mini',
        propellers: 4,
        maxSpeed: 12
    },
]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Drone.create(dronesArr)
  })
  .then(data => console.log('list created', data))
  .then(() => mongoose.connection.close())
  .then(()=> console.log(`data base is closed`))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


