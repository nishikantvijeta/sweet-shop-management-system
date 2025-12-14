import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';

dotenv.config();
const app = express();

// ✅ CORS Setup
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || 'http://127.0.0.1:3000',
      'http://localhost:3001', 
      'http://192.168.133.223:3000'  // Add your device's IP if needed
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());

// ✅ Server Status Check Route
app.get('/ping', (_req, res) => {
  res.send('Pong');
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running!" });
});

app.head("/", (req, res) => {
  res.status(200).end();
});

// ✅ Import Routes
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import miscRoutes from './routes/miscellaneous.routes.js';

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/misc', miscRoutes);  // ✅ Fixed miscRoutes

// ✅ Default 404 Route
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!!! 404 Page Not Found');
});

// ✅ Error Handling Middleware
app.use(errorMiddleware);

export default app;
