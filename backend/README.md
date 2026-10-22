# IVIPL Backend API & Database

Production-grade RESTful API server for **Investvedya Infratech (IVIPL)** real estate platform.

## 🚀 Key Features

- **Dual-Engine Resilient Database Architecture**:
  - Full **MongoDB / Mongoose** ODM support (connects automatically when `MONGODB_URI` is provided or local daemon runs).
  - High-performance, zero-config **Local JSON File Database** fallback in `backend/data/` if MongoDB is offline, ensuring the application runs out of the box with zero runtime errors or setup friction.
- **Pre-seeded Real Estate Records**:
  - Automatically seeds **9 Residential Projects** and **4 Commercial Projects** from the IVIPL portfolio.
  - Automatically seeds **6 Real Estate Insights & Blogs**.
- **RESTful Endpoints & Features**:
  - Enquiries management (Site Visits, Brochure Requests, Project Enquiries) with real-time status tracking (`new`, `contacted`, `scheduled`, `closed`).
  - Contact messages management.
  - Projects CRUD & filtering by `type` (residential/commercial), `location`, `featured`, and keyword `search`.
  - Blogs CRUD & filtering by `category`, keyword `search`, and automatic read-view counters.
  - Newsletter subscriptions with automatic duplicate deduplication.
- **Developer Experience**:
  - Express with ES Modules (`import/export`).
  - Morgan logging, CORS preconfigured for Vite dev server (`http://localhost:5173`).
  - Built-in interactive API root explorer (`GET /`).

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ivipl
CORS_ORIGIN=http://localhost:5173
```
> **Note**: If MongoDB is not running locally, the server automatically uses persistent local storage in `backend/data/*.json`. To connect to cloud MongoDB, just paste your MongoDB Atlas URI into `MONGODB_URI`.

### 3. Start the Server
```bash
# Development mode with hot-reloading
npm run dev

# Production start
npm start

# Seed or re-seed data
npm run seed
```

Server URL: **`http://localhost:5000`**

---

## 📡 API Endpoints Documentation

### Health & Explorer
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API service details and full endpoint directory |
| `GET` | `/api/health` | Service uptime and active database engine check |

---

### 1. Enquiries (`/api/enquiries`)
Capture leads from site visit modals, project inquiry forms, and quick callback requests.

- **`POST /api/enquiries`** - Submit new enquiry
  ```json
  {
    "name": "Rajesh Sharma",
    "phone": "+91 98765 43210",
    "email": "rajesh.sharma@example.com",
    "project": "Golden Grande",
    "inquiryType": "Site Visit",
    "preferredTime": "Morning (10:00 AM - 1:00 PM)",
    "message": "Looking for 3BHK high floor unit.",
    "whatsappOptIn": true,
    "source": "Residential Page Modal"
  }
  ```
- **`GET /api/enquiries`** - List all enquiries (supports `?status=new`, `?search=Rajesh`, `?project=Golden`)
- **`GET /api/enquiries/:id`** - Get single enquiry details
- **`PUT /api/enquiries/:id/status`** - Update status (`new`, `contacted`, `scheduled`, `closed`)
  ```json
  { "status": "contacted", "notes": "Advisor assigned" }
  ```
- **`DELETE /api/enquiries/:id`** - Remove enquiry

---

### 2. Contacts (`/api/contacts`)
Manage submissions from the Contact Us page.

- **`POST /api/contacts`** - Submit contact form
  ```json
  {
    "name": "Sunita Rao",
    "email": "sunita.rao@example.com",
    "phone": "+91 99887 76655",
    "propertyType": "commercial_space",
    "message": "Interested in office spaces."
  }
  ```
- **`GET /api/contacts`** - List contact queries (supports `?propertyType`, `?search`)
- **`GET /api/contacts/:id`** - Get contact query
- **`DELETE /api/contacts/:id`** - Delete contact query

---

### 3. Projects (`/api/projects`)
Residential & Commercial real-estate portfolio.

- **`GET /api/projects`** - List all projects
  - Query parameters:
    - `?type=residential` or `?type=commercial`
    - `?location=Noida`
    - `?featured=true`
    - `?search=Golden`
- **`GET /api/projects/:id`** - Get project details
- **`POST /api/projects`** - Add a new property
  ```json
  {
    "title": "Sobha Royal Pavilion",
    "subtitle": "ELEGANT LIVING",
    "type": "residential",
    "location": "Greater Noida",
    "image": "/images/r1.png",
    "badge": "New Launch",
    "description": "Premium 3 & 4 BHK luxury residences.",
    "features": [
      { "text": "Olympic Pool", "iconName": "Droplet" }
    ],
    "featured": true
  }
  ```
- **`PUT /api/projects/:id`** - Update project details
- **`DELETE /api/projects/:id`** - Delete project

---

### 4. Blogs & Insights (`/api/blogs`)
Real estate trends, investment guides, and construction updates.

- **`GET /api/blogs`** - List blogs (supports `?category=Investment`, `?search=Noida`)
- **`GET /api/blogs/:id`** - Get blog by ID (auto-increments view counter)
- **`POST /api/blogs`** - Publish new blog
- **`PUT /api/blogs/:id`** - Update blog
- **`DELETE /api/blogs/:id`** - Remove blog

---

### 5. Subscribers (`/api/subscribers`)
Newsletter and investment report subscribers.

- **`POST /api/subscribers`** - Subscribe email or phone
  ```json
  {
    "email": "investor@example.com",
    "source": "Footer Newsletter"
  }
  ```
- **`GET /api/subscribers`** - List all subscribers
- **`DELETE /api/subscribers/:id`** - Unsubscribe / remove record

---

## 📂 Project Directory Structure

```text
backend/
├── config/
│   └── db.js                 # Dual-engine connection & MongoDB auto-fallback
├── controllers/
│   ├── enquiryController.js   # Lead capture & status update logic
│   ├── contactController.js   # Contact form handler
│   ├── projectController.js   # Properties CRUD & filter engine
│   ├── blogController.js      # Articles & views tracking
│   └── subscriberController.js# Newsletter logic & deduplication
├── data/
│   ├── dbStore.js            # Persistent JSON file storage manager
│   ├── enquiries.json        # Auto-saved enquiry records
│   ├── contacts.json         # Auto-saved contact submissions
│   ├── projects.json         # Seeded & created properties
│   ├── blogs.json            # Seeded & created blogs
│   └── subscribers.json      # Newsletter subscribers
├── models/
│   ├── Enquiry.js            # Mongoose Schema + Local Store Fallback
│   ├── Contact.js            # Mongoose Schema + Local Store Fallback
│   ├── Project.js            # Mongoose Schema + Local Store Fallback
│   ├── Blog.js               # Mongoose Schema + Local Store Fallback
│   └── Subscriber.js         # Mongoose Schema + Local Store Fallback
├── routes/
│   ├── enquiryRoutes.js      # /api/enquiries
│   ├── contactRoutes.js      # /api/contacts
│   ├── projectRoutes.js      # /api/projects
│   ├── blogRoutes.js         # /api/blogs
│   └── subscriberRoutes.js   # /api/subscribers
├── seed/
│   └── seedData.js           # Seed data with 13 projects & 6 blogs
├── .env                      # Environment config
├── .env.example              # Config template
├── package.json              # Scripts & dependencies
├── README.md                 # Full documentation
└── server.js                 # Express app entry point
```
