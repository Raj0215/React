const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://rajpatil4999:Admin123@raj.brcc5no.mongodb.net/?retryWrites=true&w=majority&appName=raj', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define user schema and model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const User = mongoose.model('User', userSchema);

// API endpoint to fetch registered users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
