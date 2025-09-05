# Task 2 – Blog API Projects

This repository contains **two separate Blog API implementations**:

1. **Django Blog API** – Python Django-based backend.
2. **Express Blog API** – Node.js Express-based backend.

---

## 1️⃣ Django Blog API

### 📂 Project Structure
```
django-blog-api/
│── blog/                # Blog app
│── blogapi/             # Project config (settings, URLs, WSGI)
│── db.sqlite3           # SQLite database
│── manage.py            # Django management script
│── requirements.txt     # Python dependencies
```

### 🚀 Setup & Run

#### 1. Create and activate a virtual environment
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
```

#### 2. Install dependencies
```bash
pip install -r requirements.txt
```

#### 3. Apply migrations
```bash
python manage.py migrate
```

#### 4. Create a superuser
```bash
python manage.py createsuperuser
```

#### 5. Run the development server
```bash
python manage.py runserver 8000
```

#### 6. Access the application
- **API:** `http://127.0.0.1:8000/`
- **Admin Panel:** `http://127.0.0.1:8000/admin/`

---

## 2️⃣ Express Blog API

### 📂 Project Structure
```
express-blog-api/
│── app.js              # Main Express app
│── package.json        # Node.js dependencies
│── routes/             # API routes
│── controllers/        # Request handlers
```

### 🚀 Setup & Run

#### 1. Install dependencies
```bash
npm install
```

#### 2. Run the server
```bash
npm start
```
Or with hot reload (if `nodemon` is installed):
```bash
npx nodemon app.js
```

#### 3. API will be available at:
```
http://localhost:3000/
```

---

## ⚙ Environment Configuration

### Django
- Change settings in `blogapi/settings.py`
- For production:
  ```python
  DEBUG = False
  ALLOWED_HOSTS = ['sagnik.com'] 
  ```

### Express
- Create a `.env` file for variables like:
  ```
  PORT=3000
  ```

---

## 🛠 Useful Commands

### Django
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8000
```

### Express
```bash
npm install
npx nodemon app.js
```

---

## 📌 Notes
- Python 3.8+ is required for Django.
- Node.js 16+ is recommended for Express.
- Use **Postman** to test API endpoints.
- Example Postman collection can be exported from Postman.
