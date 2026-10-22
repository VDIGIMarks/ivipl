import mongoose from 'mongoose';
import { dbStore } from '../data/dbStore.js';
import { isMongoActive } from '../config/db.js';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, default: '' },
    type: { type: String, enum: ['residential', 'commercial'], required: true },
    location: { type: String, required: true },
    image: { type: String, default: '' },
    badge: { type: String, default: '' },
    badgeBg: { type: String, default: '' },
    description: { type: String, default: '' },
    features: [
      {
        text: String,
        iconName: String
      }
    ],
    highlights: [
      {
        text: String,
        iconName: String
      }
    ],
    featured: { type: Boolean, default: true },
    status: { type: String, default: 'active' }
  },
  { timestamps: true }
);

const MongoProject = mongoose.model('Project', projectSchema);

export const Project = {
  find: async (filter = {}) => {
    if (isMongoActive()) {
      try {
        return await MongoProject.find(filter).sort({ createdAt: -1 });
      } catch (err) {
        console.error('Mongo error in Project.find:', err.message);
      }
    }
    const all = dbStore.getAll('projects');
    return all.filter((item) => {
      let match = true;
      if (filter.type) {
        match = match && item.type?.toLowerCase() === filter.type.toLowerCase();
      }
      if (filter.location) {
        match = match && item.location?.toLowerCase().includes(filter.location.toLowerCase());
      }
      return match;
    });
  },

  findById: async (id) => {
    if (isMongoActive()) {
      try {
        const item = await MongoProject.findById(id);
        if (item) return item;
      } catch (err) {
        // Fall back to local
      }
    }
    return dbStore.getById('projects', id);
  },

  create: async (data) => {
    let mongoRecord = null;
    if (isMongoActive()) {
      try {
        mongoRecord = await MongoProject.create(data);
      } catch (err) {
        console.error('Mongo error in Project.create:', err.message);
      }
    }
    const localRecord = dbStore.insert('projects', {
      ...data,
      _id: mongoRecord?._id || undefined
    });
    return mongoRecord || localRecord;
  },

  findByIdAndUpdate: async (id, updates) => {
    let mongoRecord = null;
    if (isMongoActive()) {
      try {
        mongoRecord = await MongoProject.findByIdAndUpdate(id, updates, { new: true });
      } catch (err) {
        // Fall back to local
      }
    }
    const localRecord = dbStore.update('projects', id, updates);
    return mongoRecord || localRecord;
  },

  findByIdAndDelete: async (id) => {
    if (isMongoActive()) {
      try {
        await MongoProject.findByIdAndDelete(id);
      } catch (err) {
        // Ignore
      }
    }
    return dbStore.remove('projects', id);
  }
};
