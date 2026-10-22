import mongoose from 'mongoose';
import { dbStore } from '../data/dbStore.js';
import { isMongoActive } from '../config/db.js';

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    project: { type: String, default: 'General Inquiry' },
    inquiryType: { type: String, default: 'Site Visit' },
    preferredTime: { type: String, default: 'Anytime' },
    message: { type: String, default: '' },
    whatsappOptIn: { type: Boolean, default: true },
    status: {
      type: String,
      enum: ['new', 'contacted', 'scheduled', 'closed'],
      default: 'new'
    },
    source: { type: String, default: 'Website' }
  },
  { timestamps: true }
);

const MongoEnquiry = mongoose.model('Enquiry', enquirySchema);

export const Enquiry = {
  find: async (filter = {}) => {
    if (isMongoActive()) {
      try {
        return await MongoEnquiry.find(filter).sort({ createdAt: -1 });
      } catch (err) {
        console.error('Mongo error in Enquiry.find:', err.message);
      }
    }
    return dbStore.getAll('enquiries');
  },

  findById: async (id) => {
    if (isMongoActive()) {
      try {
        const item = await MongoEnquiry.findById(id);
        if (item) return item;
      } catch (err) {
        // Fall back to local ID check
      }
    }
    return dbStore.getById('enquiries', id);
  },

  create: async (data) => {
    let mongoRecord = null;
    if (isMongoActive()) {
      try {
        mongoRecord = await MongoEnquiry.create(data);
      } catch (err) {
        console.error('Mongo error in Enquiry.create:', err.message);
      }
    }
    const localRecord = dbStore.insert('enquiries', {
      ...data,
      _id: mongoRecord?._id || undefined
    });
    return mongoRecord || localRecord;
  },

  findByIdAndUpdate: async (id, updates) => {
    let mongoRecord = null;
    if (isMongoActive()) {
      try {
        mongoRecord = await MongoEnquiry.findByIdAndUpdate(id, updates, { new: true });
      } catch (err) {
        // Fall back to local
      }
    }
    const localRecord = dbStore.update('enquiries', id, updates);
    return mongoRecord || localRecord;
  },

  findByIdAndDelete: async (id) => {
    if (isMongoActive()) {
      try {
        await MongoEnquiry.findByIdAndDelete(id);
      } catch (err) {
        // Ignore
      }
    }
    return dbStore.remove('enquiries', id);
  }
};
