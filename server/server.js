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

// ========== Middleware ==========
app.use(cors());
app.use(express.json());

// ========== Swagger Setup ==========
const swaggerPath = path.join(__dirname, './openapi.yaml');
try {
  const swaggerDocument = YAML.load(swaggerPath);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log('✅ Swagger UI available at /api-docs');
} catch (err) {
  console.warn('⚠️ Swagger not loaded. Check openapi.yaml');
}

// ========== Serve Frontend ==========
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ========== API Routes ==========
app.use('/api/books', bookRoutes); // << IMPORTANT ROUTE
app.use('/books', (req, res) => res.redirect('/api/books'));

// ========== Connect MongoDB & Start Server ==========
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});
