# Hostinger Deployment Guide for IVIPL Real Estate

This guide explains how to deploy your website to **Hostinger** and how the `.htaccess` file handles URL routing, SSL, security, and performance.

---

## 1. What was Added & Fixed

1. **`.htaccess` File Added**:
   - [`frontend/public/.htaccess`](file:///c:/Users/shiva/Desktop/ivipl/frontend/public/.htaccess): Automatically copied into `dist/` on every `npm run build`.
   - [`frontend/dist/.htaccess`](file:///c:/Users/shiva/Desktop/ivipl/frontend/dist/.htaccess): Ready for immediate upload to Hostinger's `public_html`.
   - [`.htaccess`](file:///c:/Users/shiva/Desktop/ivipl/.htaccess): Root level configuration.

2. **Why `.htaccess` is Crucial on Hostinger**:
   - **React Router SPA Routing**: When visitors reload or visit direct URLs (such as `/aboutus`, `/contact`, `/commercialp`, `/blog`), Hostinger LiteSpeed/Apache servers would show a **404 Not Found** without this file. The `.htaccess` directs all non-file requests cleanly to `index.html`.
   - **Automatic HTTPS Redirection**: Redirects insecure `http://` traffic to `https://`.
   - **Gzip & Deflate Compression**: Drastically reduces bundle sizes and speeds up page load.
   - **Browser Caching**: Caches static assets (images, fonts, scripts) for up to 1 year while serving fresh HTML.
   - **Security Headers & File Protection**: Blocks access to sensitive files (`.env`, `.git`, `.json`, `.sql`) and prevents clickjacking and MIME sniffing.

3. **API Configuration Fixed**:
   - Created centralized [`frontend/src/config/api.js`](file:///c:/Users/shiva/Desktop/ivipl/frontend/src/config/api.js) so contact forms and enquiry modals dynamically use `VITE_API_URL` instead of hardcoding `http://localhost:5000`.

---

## 2. Step-by-Step: Uploading to Hostinger

### Option A: Using Hostinger File Manager (Easiest)

1. **Build the Frontend** (Already built and ready):
   ```bash
   cd frontend
   npm run build
   ```
2. **Compress the `frontend/dist` contents**:
   - Open your `frontend/dist` folder.
   - Select all files and folders inside `dist`:
     - `.htaccess`
     - `index.html`
     - `assets/`
     - `images/`
     - `logo/`
     - `videos/`
     - `favicon.svg`
     - `icons.svg`
     - `logoIVIPL.png`
   - Right-click and choose **Compress to ZIP** (e.g. `website-build.zip`).
   > **Note**: Compress the *contents* of `dist`, not the `dist` folder itself.

3. **Log into Hostinger hPanel**:
   - Go to [hostinger.com](https://www.hostinger.com) and log into your account.
   - Click on **Websites** -> Select your website -> Click **Manage**.
   - Under **Files**, click **File Manager**.

4. **Upload to `public_html`**:
   - Navigate into the **`public_html`** directory.
   - Click the **Upload** button in the top right -> choose **File** -> select your `website-build.zip`.
   - Right-click `website-build.zip` and select **Extract**.
   - Make sure files are extracted directly inside `public_html` (not in a subfolder).
   - Delete the `.zip` file after extraction.

5. **Verify Hidden Files (`.htaccess`)**:
   - In Hostinger File Manager, click the **Settings** (gear icon) in the bottom-left or top-right.
   - Ensure **Show Hidden Files (dotfiles)** is enabled so `.htaccess` is visible.

---

### Option B: Using FTP (FileZilla)

1. Open FileZilla.
2. Enter your Hostinger FTP Host, Username, and Password (found in Hostinger hPanel -> **FTP Accounts**).
3. On the remote side, open `public_html/`.
4. On your local side, navigate to `c:\Users\shiva\Desktop\ivipl\frontend\dist\`.
5. Select all items (including `.htaccess`) and drag & drop them into `public_html/`.

---

## 3. Connecting the Backend (Node.js API)

If you plan to run the Node.js backend (`backend/`):

### Option 1: Host Backend on Hostinger (VPS or Cloud / Node.js App)
- Hostinger Business / Cloud hosting has a **"Node.js"** section under hPanel:
  - Upload `backend/` to a folder outside `public_html` (e.g. `/home/uXXXX/backend`).
  - Set Node.js version to 18 or 20+.
  - Application startup file: `server.js`.
  - In hPanel, note the port or domain assigned.

### Option 2: Host Backend on Render / Railway / Heroku (Free / Low Cost)
- Deploy your `backend` repository to [Render.com](https://render.com) or [Railway.app](https://railway.app).
- Add your MongoDB connection string in the environment variables.
- Copy your live backend URL (e.g. `https://ivipl-api.onrender.com`).
- In `frontend/.env.production`, add:
  ```env
  VITE_API_URL=https://ivipl-api.onrender.com
  ```
- Re-run `npm run build` and upload the new `dist` to Hostinger.

---

## 4. Testing Your Live Website

Once uploaded to Hostinger, verify the following:
1. Visit `https://yourdomain.com/` — The homepage and 3D animations should load.
2. Visit direct routes such as `https://yourdomain.com/aboutus`, `https://yourdomain.com/contact`, `https://yourdomain.com/blog` and click refresh (`F5`) — No 404 error should appear.
3. Test with `http://yourdomain.com/` — It should automatically redirect to `https://`.
