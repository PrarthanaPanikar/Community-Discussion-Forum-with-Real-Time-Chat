# Community Discussion Forum with Real-Time Chat 🚀

A full-stack MERN application that combines a modern community discussion forum with real-time communication features using Socket.IO. Users can create discussions, comment on posts, join chat rooms, send instant messages, receive notifications, and interact with the community seamlessly.

---

# 📌 Project Overview

The **Community Discussion Forum with Real-Time Chat** is a full-stack web application designed for communities, students, developers, online learning platforms, and support groups.

This platform allows users to:

* Create and manage discussion threads
* Comment and interact with community posts
* Communicate through real-time chat
* Receive live notifications
* Join topic-based conversations
* Search discussions using tags and keywords

The project demonstrates:

* Full Stack Development
* MERN Stack Architecture
* REST API Development
* Real-Time Communication using Socket.IO
* Authentication & Authorization
* Database Design using MongoDB

---

# ✨ Features

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Password Hashing

## 💬 Discussion Forum

* Create Discussions
* Edit/Delete Discussions
* Discussion Categories & Tags
* Comment System
* Like/Vote Functionality

## ⚡ Real-Time Chat

* Public Chat Channels
* Direct Messaging (DM)
* Real-Time Messaging using Socket.IO
* Typing Indicators
* Online User Presence

## 🔔 Notifications

* New Comment Notifications
* Message Alerts
* Real-Time Updates

## 🔎 Search & Filtering

* Search Discussions
* Filter by Tags/Categories
* Recent & Trending Discussions

## 🎨 UI/UX

* Responsive Design
* Clean Dashboard
* Modern User Interface
* Mobile Friendly

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS / Bootstrap
* Socket.IO Client

## Backend

* Node.js
* Express.js
* Socket.IO
* JWT Authentication
* bcrypt.js

## Database

* MongoDB
* Mongoose

## Tools & Platforms

* Git & GitHub
* VS Code
* Postman

---

# 🧠 System Workflow

```text
User Registration
        ↓
User Login
        ↓
JWT Authentication
        ↓
Create Discussion / Join Discussion
        ↓
Post Comments & Replies
        ↓
Join Real-Time Chat
        ↓
Receive Notifications & Updates
```

---

# 🏗 Project Architecture

```text
Frontend (React)
    ↓
REST APIs + Socket.IO
    ↓
Backend Server (Node + Express)
    ↓
MongoDB Database
```

---

# 📂 Folder Structure

```bash
Community-Discussion-Forum-RealTime-Chat/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── sockets/
│   │   ├── context/
│   │   ├── App.js
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── docs/
├── README.md
├── .gitignore
└── package.json
```

---

# ⚙️ Installation Guide

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/community-discussion-forum.git
```

```bash
cd community-discussion-forum
```

---

# 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

# 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 4️⃣ Setup Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

---

# 5️⃣ Run Backend Server

```bash
npm run dev
```

---

# 6️⃣ Run Frontend

Open another terminal:

```bash
cd client
npm run dev
```

---

# 🌐 API Endpoints

## Authentication Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

---

## Discussion Routes

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | /api/discussions     | Get Discussions   |
| POST   | /api/discussions     | Create Discussion |
| PUT    | /api/discussions/:id | Update Discussion |
| DELETE | /api/discussions/:id | Delete Discussion |

---

## Comment Routes

| Method | Endpoint                    | Description  |
| ------ | --------------------------- | ------------ |
| POST   | /api/comments/:discussionId | Add Comment  |
| GET    | /api/comments/:discussionId | Get Comments |

---

# ⚡ Socket.IO Events

| Event          | Description      |
| -------------- | ---------------- |
| joinRoom       | Join Chat Room   |
| sendMessage    | Send Message     |
| receiveMessage | Receive Message  |
| typing         | Typing Indicator |
| onlineUsers    | Active Users     |

---

# 🧩 Database Collections

## User Collection

```js
{
  username,
  email,
  password,
  profilePicture
}
```

## Discussion Collection

```js
{
  title,
  content,
  tags,
  createdBy
}
```

## Comment Collection

```js
{
  discussionId,
  userId,
  comment
}
```

## Message Collection

```js
{
  sender,
  receiver,
  message,
  timestamp
}
```

---

# 🔒 Authentication & Security

* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes Middleware
* Environment Variables Security

---

# 📸 Suggested Screenshots

Add screenshots inside `/docs/screenshots`

Examples:

* Login Page
* Register Page
* Dashboard
* Discussion Page
* Chat Interface
* Notifications Panel

---

# 🚀 Future Enhancements

* Voice & Video Chat
* AI-based Moderation
* Dark Mode
* File Sharing
* Admin Dashboard
* Group Channels
* Push Notifications
* Docker Deployment

---

# 🧪 Testing

## Backend Testing

* Postman API Testing
* Route Validation
* JWT Verification

## Frontend Testing

* Component Testing
* UI Responsiveness
* Real-Time Message Testing

---

# 📚 Learning Outcomes

This project demonstrates:

* Full Stack Development Skills
* MERN Stack Knowledge
* Real-Time Communication
* REST API Design
* MongoDB Database Modeling
* Authentication & Authorization
* Socket.IO Integration
* GitHub Project Structuring

---

# 💼 Resume Value

Suitable for:

* Full Stack Developer Roles
* MERN Stack Developer Roles
* Backend Developer Roles
* Frontend Developer Roles
* Software Engineer Roles
* Real-Time Application Developer Roles

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to GitHub
5. Create a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Prarthana Panikar**

**Email :** [prarthanapanikar@gmail.com] 
---

# ⭐ Support

If you like this project:

* Give it a ⭐ on GitHub
* Share feedback
* Connect on LinkedIn

---

# 🔥 Project Highlights

✅ MERN Stack
✅ Real-Time Chat
✅ Socket.IO
✅ JWT Authentication
✅ Responsive UI
✅ REST APIs
✅ MongoDB Integration
✅ Industry-Oriented Project
