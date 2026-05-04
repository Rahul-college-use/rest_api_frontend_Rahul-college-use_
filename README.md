# 🎓 Student Management System

A modern **Student Registration & Management Web Application** built using **React (Frontend)** and **Node.js + Express (Backend)**.
This system allows administrators (TPO/College Office) to manage student data efficiently.

---

## 🚀 Features

* 📝 Student Registration Form
* 📧 Email, Reg No, Roll No Tracking
* 🏫 Department Selection (CSE, ECE, ME, CE, EE)
* 🧠 Skills Management (comma-separated → array)
* ⚡ Real-time UI with React
* 🔔 Toast Notifications (Success/Error Handling)
* 🔄 Auto-refresh after adding student
* 🎨 Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Lucide Icons
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📂 Project Structure

```
project-root/
│
├── frontend/
│   ├── components/
│   │   └── StudentForm.jsx
│   ├── App.js
│   └── index.js
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRouter.js
│   ├── controllers/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/student-management.git
cd student-management
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm start
```

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoint

### ➤ Create Student

```
POST /api/userRouter/create
```

### Sample Request Body:

```json
{
  "name": "Rahul Kumar",
  "email": "rahul@gmail.com",
  "reg_no": "12345",
  "roll_no": "67",
  "dept": "CSE",
  "skills": ["React", "Node.js", "PHP"]
}
```

---

## 📸 UI Preview

* Clean Card-based Form Layout
* Icon-based Inputs
* Responsive Grid System
* Toast Notifications

---

## ⚠️ Validation Rules

* All fields are required
* Department must be selected
* Skills must not be empty
* Email should be unique

---

## 🔥 Future Enhancements

* 📷 Student Profile Image Upload
* ✏️ Edit & Update Student Details
* 🔍 Search & Filter Students
* 📊 Dashboard Analytics
* 📄 Export Data to PDF/Excel
* 🔐 Authentication (Admin Login)

---

## 👨‍💻 Author

**Rahul Kumar**
B.Tech Student | Full Stack Developer

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
