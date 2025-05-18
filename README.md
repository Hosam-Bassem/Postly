# 📝 Postly — A React Blog App

**Postly** is a lightweight blog application built using React. It allows users to create, edit, delete, and search blog posts, all powered by a mock REST API using `json-server`.

---

## 🚀 Features

- ✍️ Create new blog posts  
- 📝 Edit existing posts  
- ❌ Delete posts with confirmation  
- 🔍 Search posts by title or content  
- ⚡ Instant updates via React state and effect hooks  
- 📡 Mock RESTful API via `json-server`

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)  
- **React Router DOM** (for navigation)  
- **Axios** (for HTTP requests)  
- **JSON Server** (for local REST API)  

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hosam-Bassem/Postly.git
   cd Postly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## ▶️ Running the App

1. **Start JSON Server**
   ```bash
   npx json-server --watch data/db.json --port 3500
   ```

2. **Start React App**
   ```bash
   npm start
   ```

Visit the app at: [http://localhost:3000](http://localhost:3000)
