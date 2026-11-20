# IVIPL Admin Panel

Centralized administrative dashboard for **Investvedya Infratech (IVIPL)** real estate platform.

## 🚀 Key Features

- **Dashboard Overview**: Summary statistics for enquiries, new leads, active listings, blog posts, and newsletter subscribers.
- **Enquiries & Lead Management**: Filter, track, and update enquiry lead status (`new`, `contacted`, `scheduled`, `closed`).
- **Real Estate Listings**: Manage residential and commercial properties, pricing, locations, and featured status.
- **Blogs & Advisory**: Publish and monitor real estate market insights and view counters.
- **Contact Submissions**: Review messages sent through the customer contact page.
- **Subscribers Management**: Manage newsletter mailing lists with single-click email export.
- **Authentication**: Built-in login workflow with session persistence (`localStorage`).

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
cd admin
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Development Server
```bash
npm run dev
```

The admin panel runs on **`http://localhost:5174`** (or next available port).

---

## 🔐 Default Admin Credentials

- **Email**: `admin@ivipl.com`
- **Password**: `admin123`

*(Can be customized in `src/context/AuthContext.jsx` or connected to an authentication backend endpoint).*

---

## 📁 Folder Structure

```
admin/
├── public/
├── src/
│   ├── components/
│   │   ├── AdminLayout.jsx    # Responsive layout shell with sidebar & navbar
│   │   ├── Navbar.jsx         # Status banner and user profile
│   │   └── Sidebar.jsx        # Navigation links & quick site switch
│   ├── context/
│   │   └── AuthContext.jsx    # Admin authentication context & session state
│   ├── pages/
│   │   ├── AdminDashboard.jsx # Analytics and recent inquiries summary
│   │   ├── AdminLogin.jsx     # Modern login interface
│   │   ├── EnquiriesAdmin.jsx # Lead workflow and status updater
│   │   ├── ProjectsAdmin.jsx  # Real estate project CRUD management
│   │   ├── BlogsAdmin.jsx     # Insights and articles manager
│   │   ├── ContactsAdmin.jsx  # Public contact inquiries table
│   │   └── SubscribersAdmin.jsx # Newsletter subscriber export
│   ├── services/
│   │   └── api.js             # REST API client connecting to backend (:5000)
│   ├── App.jsx                # Protected route table
│   ├── index.css              # Tailwind CSS styles
│   ├── index.js               # Export barrel file
│   └── main.jsx               # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

