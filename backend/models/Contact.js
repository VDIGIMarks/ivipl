import mongoose from 'mongoose';
import { dbStore } from '../data/dbStore.js';
import { isMongoActive } from '../config/db.js';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    propertyType: { type: String, default: 'residential_apartment' },
    message: { type: String, default: '' }
  },
  { timestamps: true }
);

const MongoContact = mongoose.model('Contact', contactSchema);

export const Contact = {
  find: async (filter = {}) => {
    if (isMongoActive()) {
      try {
        return await MongoContact.find(filter).sort({ createdAt: -1 });
      } catch (err) {
        console.error('Mongo error in Contact.find:', err.message);
      }
    }
    return dbStore.getAll('contacts');
  },

  findById: async (id) => {
    if (isMongoActive()) {
      try {
        const item = await MongoContact.findById(id);
        if (item) return item;
      } catch (err) {
        // Fall back to local
      }
    }
    return dbStore.getById('contacts', id);
  },

  create: async (data) => {
    let mongoRecord = null;
    if (isMongoActive()) {
      try {
        mongoRecord = await MongoContact.create(data);
      } catch (err) {
        console.error('Mongo error in Contact.create:', err.message);
      }
    }
    const localRecord = dbStore.insert('contacts', {
      ...data,
      _id: mongoRecord?._id || undefined
    });
    return mongoRecord || localRecord;
  },

  findByIdAndDelete: async (id) => {
    if (isMongoActive()) {
      try {
        await MongoContact.findByIdAndDelete(id);
      } catch (err) {
        // Ignore
      }
    }
    return dbStore.remove('contacts', id);
  }
};
