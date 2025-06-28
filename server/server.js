const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// === Root Route for Health Check ===
app.get('/', (req, res) => {
  res.send('📘 Welcome to the Book Management API. Use /api/books for API routes.');
});

// === Optional: Serve Frontend Files ===
// Uncomment this if you want to serve index.html from frontend folder
// app.use(express.static(path.join(__dirname, '../frontend')));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/index.html'));
// });

// === Optional: Swagger UI Setup ===
// Uncomment after placing openapi.yaml at root level
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.join(__dirname, '../openapi.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
    .catch((err) => console.log('❌ MongoDB Connection Error:', err));
}
