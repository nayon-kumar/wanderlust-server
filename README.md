# 🌍 WonderLast Server

Backend server for the **WonderLast Travel & Booking Platform**.  
Built with **Express.js**, **MongoDB**, and **JWT Authentication** to manage destinations and user bookings securely.

---

## 🌐 Live Server

👉 https://wanderlust-server-sable.vercel.app/

---

## 🚀 Features

- RESTful API with Express.js
- MongoDB database integration
- Secure JWT authentication using JOSE
- Protected private routes
- CRUD operations for travel destinations
- Booking management system
- Environment variable support with dotenv
- CORS enabled for frontend integration

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- JOSE (JWT Verification)
- dotenv
- cors

---

## 📂 API Endpoints

### 🌍 Destination Routes

| Method | Endpoint           | Description            | Private |
| ------ | ------------------ | ---------------------- | ------- |
| GET    | `/destination`     | Get all destinations   | ❌      |
| GET    | `/destination/:id` | Get single destination | ✅      |
| POST   | `/destination`     | Add new destination    | ✅      |
| PATCH  | `/destination/:id` | Update destination     | ✅      |
| DELETE | `/destination/:id` | Delete destination     | ✅      |

---

### 📖 Booking Routes

| Method | Endpoint               | Description          | Private |
| ------ | ---------------------- | -------------------- | ------- |
| POST   | `/bookings`            | Create booking       | ✅      |
| GET    | `/bookings/:userID`    | Get bookings by user | ✅      |
| DELETE | `/bookings/:bookingId` | Delete booking       | ✅      |

---

## 🔐 Authentication

This server uses **JWT authentication** with `jose-cjs`.

Protected routes require an Authorization header.
