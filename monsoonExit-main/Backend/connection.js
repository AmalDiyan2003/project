const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amal123:amal123@clusterad.z1ina.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAD')
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });
