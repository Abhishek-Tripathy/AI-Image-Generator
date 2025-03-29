# AI Image Generator (SaaS)

🚀 **AI Image Generator** is a SaaS application that allows users to generate images using AI. Built with the **MERN stack**, this project leverages the **Clipdrop API** for high-quality image generation.

## 🌐 Live Demo

[AI Image Generator](https://ai-image-generator-frontend-fawn.vercel.app/)

---

## 🛠️ Tech Stack

### **Frontend:**

- React (v19.0.0)
- React Router DOM (v7.4.0)
- Motion (v12.6.2) for animations
- React Icons (v5.5.0)
- React Toastify (v11.0.5)
- Axios (v1.8.4) for API requests

### **Backend:**

- Express.js (v4.21.2)
- MongoDB + Mongoose (v8.13.0)
- JSON Web Token (JWT) (v9.0.2) for authentication
- Bcrypt (v5.1.1) for password hashing
- CORS (v2.8.5)
- Dotenv (v16.4.7)
- Axios (v1.8.4) for API integration
- Form-Data (v4.0.2) for handling image uploads

---

## ⚙️ Features

✅ AI-powered image generation via **Clipdrop API**  
✅ User authentication & secure login/logout (JWT & bcrypt)  
✅ Real-time image rendering with animations  
✅ Toast notifications (React-Toastify)  
✅ Responsive UI for desktop & mobile  
✅ Deployed on **Vercel** for seamless performance  

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/ai-image-generator.git
cd ai-image-generator
```

### **2️⃣ Install Dependencies**

#### Frontend:

```sh
cd client
npm install
```

#### Backend:

```sh
cd server
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a `.env` file in the backend directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIPDROP_API_KEY=your_clipdrop_api_key
```

### **4️⃣ Start the Application**

#### Run Backend:

```sh
npm start
```

#### Run Frontend:

```sh
npm run dev
```

---

## 📷 API Integration (Clipdrop)

This project integrates with the **Clipdrop API** to generate high-quality images using AI. The backend communicates with the API using `axios` and `form-data`.

---

## 📌 Deployment

The project is deployed on **Vercel**:  
🔗 [Live Project](https://ai-image-generator-frontend-fawn.vercel.app/)

For production deployment, configure your **Vercel** or **Render** setup for both frontend and backend.

---

## 🙌 Contributing

1. Fork the repository  
2. Create a new branch (`feature-new`)  
3. Commit your changes  
4. Push to your forked repo  
5. Submit a pull request 🎉  

---

## 📝 License

This project is **open-source** under the MIT License.

---

### 💡 Feel free to ⭐ this repository if you found it helpful!

