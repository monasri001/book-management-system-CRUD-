const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Export the app for testing
module.exports = app;

// Start server only if not in test mode
if (require.main === module) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
      });
    })
    .catch((err) => console.log(err));
}
