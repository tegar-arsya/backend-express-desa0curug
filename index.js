const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = 5000;
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Define routes
const routes = {
  auth: '/api/auth',
  gallery: '/api/gallery',
  perangkat: '/api/perangkat',
  statistics: '/api/statistics', // New statistics route
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import and use routes
const authRoutes = require('./routes/authRoutes');
const postRoutesGallery = require('./routes/postRoutesGallery');
const postRoutesPerangkat = require('./routes/postRoutesPerangkat');
const statisticsRoutes = require('./routes/statisticsRoutes'); // Import statistics route

app.use(routes.auth, authRoutes);
app.use(routes.gallery, postRoutesGallery);
app.use(routes.perangkat, postRoutesPerangkat);
app.use(routes.statistics, statisticsRoutes); // Use statistics route

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`sukses dan Server running on http://localhost:${PORT}`);
});
