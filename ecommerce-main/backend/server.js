const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const cartRoutes = require('./routes/cartRoutes'); // Adjust the path
const viewRoutes = require('./routes/viewRoutes');


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));


// Routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', viewRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API');
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
