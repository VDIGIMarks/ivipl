import mongoose from 'mongoose';
import { dbStore } from '../data/dbStore.js';
import { isMongoActive } from '../config/db.js';

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    source: { type: String, default: 'Newsletter' }
  },
  { timestamps: true }
);

const MongoSubscriber = mongoose.model('Subscriber', subscriberSchema);

export const Subscriber = {
  find: async () => {
    if (isMongoActive()) {
      try {
        return await MongoSubscriber.find().sort({ createdAt: -1 });
      } catch (err) {
        console.error('Mongo error in Subscriber.find:', err.message);
      }
    }
    return dbStore.getAll('subscribers');
  },

  create: async (data) => {
    let mongoRecord = null;
    if (isMongoActive()) {
      try {
        mongoRecord = await MongoSubscriber.create(data);
      } catch (err) {
        console.error('Mongo error in Subscriber.create:', err.message);
      }
    }
    const localRecord = dbStore.insert('subscribers', {
      ...data,
      _id: mongoRecord?._id || undefined
    });
    return mongoRecord || localRecord;
  },

  findByIdAndDelete: async (id) => {
    if (isMongoActive()) {
      try {
        await MongoSubscriber.findByIdAndDelete(id);
      } catch (err) {
        // Ignore
      }
    }
    return dbStore.remove('subscribers', id);
  }
};
