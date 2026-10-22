import mongoose from 'mongoose';
import dns from 'node:dns';

// Fix for Windows / ISP DNS resolvers failing on MongoDB Atlas SRV querySrv lookup
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {
  // Ignore if custom dns servers cannot be configured
}

let isMongoConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ivipl';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 6000
    });
    isMongoConnected = true;
    console.log(`✓ MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    isMongoConnected = false;
    console.log(`ℹ MongoDB is not available (${error.message}).`);
    console.log('✓ Using persistent local JSON database in ./data/ for all models and routes.');
    console.log('  To connect MongoDB Atlas, update MONGODB_URI in backend/.env');
    return false;
  }
};

export const isMongoActive = () => isMongoConnected;
