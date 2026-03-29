import mongoose from 'mongoose';
import { MONGODB_URI } from './utils.js';

export default function connectDB() {
  const connectWithRetry = async (retryCount = 0) => {
    try {
      await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
      });
      console.log(`Database connected: ${MONGODB_URI}`);
    } catch (err) {
      console.error(`Database connection error (attempt ${retryCount + 1}):`, err.message);
      
      if (retryCount < 5) {
        console.log('Retrying database connection in 5 seconds...');
        setTimeout(() => connectWithRetry(retryCount + 1), 5000);
      } else {
        console.error('Failed to connect to database after 5 attempts');
        process.exit(1);
      }
    }
  };

  connectWithRetry();

  const dbConnection = mongoose.connection;

  dbConnection.on('error', (err) => {
    console.error(`Database connection error: ${err.message}`);
  });

  dbConnection.on('disconnected', () => {
    console.log('Database disconnected');
  });

  return;
}
