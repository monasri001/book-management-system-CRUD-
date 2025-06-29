const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const bookRoutes = require('./routes/bookroutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend from ../frontend/index.html
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Swagger API Docs
const swaggerPath = path.join(__dirname, './openapi.yaml');
try {
  const swaggerDocument = YAML.load(swaggerPath);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log('✅ Swagger UI available at /api-docs');
} catch (err) {
  console.warn('⚠️ openapi.yaml not found or invalid. Swagger UI disabled.');
}

// API Routes
app.use('/books', (req, res) => {
  res.redirect('/api/books');
});

// app.use('/api/books', bookRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
