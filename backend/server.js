import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB, isMongoActive } from './config/db.js';
import { seedDatabase } from './seed/seedData.js';

// Route imports
import enquiryRoutes from './routes/enquiryRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import subscriberRoutes from './routes/subscriberRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
await connectDB();

// Auto-seed initial data on startup if not already seeded
await seedDatabase(false);

// Middleware
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Root Health & API Explorer Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'IVIPL Real Estate Backend API',
    database: isMongoActive() ? 'MongoDB Connected' : 'Local JSON File Store (Active)',
    endpoints: {
      enquiries: {
        'POST /api/enquiries': 'Submit site visit, brochure, or project enquiry',
        'GET /api/enquiries': 'List all inquiries (supports ?status, ?search, ?project)',
        'GET /api/enquiries/:id': 'Get enquiry by ID',
        'PUT /api/enquiries/:id/status': 'Update enquiry status (new, contacted, scheduled, closed)',
        'DELETE /api/enquiries/:id': 'Delete enquiry'
      },
      contacts: {
        'POST /api/contacts': 'Submit contact message form',
        'GET /api/contacts': 'List contact messages',
        'GET /api/contacts/:id': 'Get contact message by ID',
        'DELETE /api/contacts/:id': 'Delete contact message'
      },
      projects: {
        'GET /api/projects': 'Get all projects (filter with ?type=residential or ?type=commercial, ?location, ?search)',
        'GET /api/projects/:id': 'Get project details by ID',
        'POST /api/projects': 'Create a new project',
        'PUT /api/projects/:id': 'Update existing project',
        'DELETE /api/projects/:id': 'Delete project'
      },
      blogs: {
        'GET /api/blogs': 'Get all blogs (filter with ?category, ?search)',
        'GET /api/blogs/:id': 'Get blog details by ID (auto-increments views)',
        'POST /api/blogs': 'Create a new blog article',
        'PUT /api/blogs/:id': 'Update blog article',
        'DELETE /api/blogs/:id': 'Delete blog article'
      },
      subscribers: {
        'POST /api/subscribers': 'Subscribe email or phone to newsletter',
        'GET /api/subscribers': 'List all subscribers',
        'DELETE /api/subscribers/:id': 'Unsubscribe / delete subscriber'
      },
      health: {
        'GET /api/health': 'Check service status and DB engine'
      }
    }
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: {
      type: isMongoActive() ? 'MongoDB' : 'Local JSON Store',
      connected: true
    },
    uptimeSeconds: Math.floor(process.uptime())
  });
});

// Mount Routes
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/subscribers', subscriberRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API Route ${req.originalUrl} not found.`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? null : err.message
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 IVIPL Backend Server running on port ${PORT}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`💾 Database: ${isMongoActive() ? 'MongoDB' : 'Local Persistent JSON'}`);
  console.log(`===============================================`);
});