# PicGEn

PicGen is a full-stack web application that allows users to generate AI-powered images through text prompts and manage their credits using Razorpay payment integration.

## Features

- 🎨 AI Image Generation through text prompts
- 💳 Credit-based system with Razorpay integration
- 👤 User authentication and authorization
- 📱 Responsive design with modern UI
- 🔒 Secure payment processing
- 📊 User credit management

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- TailwindCSS for styling
- React Toastify for notifications
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- Razorpay for payments
- Bcrypt for password hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Razorpay account and API keys

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/IMAGIFY-AI.git
cd IMAGIFY-AI
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

5. Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:3000
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Project Structure

```
IMAGIFY-AI/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── models/
│   │   └── server.js
│   └── package.json
└── README.md
```

## API Endpoints

### User Routes
- POST /api/user/register - Register a new user
- POST /api/user/login - User login
- GET /api/user/profile - Get user profile

### Image Routes
- POST /api/image/generate - Generate new image
- GET /api/image/history - Get user's image generation history

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email your-email@example.com or open an issue in the repository. 