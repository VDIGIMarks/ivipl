import mongoose from 'mongoose';
import { dbStore } from '../data/dbStore.js';
import { isMongoActive } from '../config/db.js';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    date: { type: String, default: () => new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) },
    image: { type: String, default: '' },
    description: { type: String, required: true },
    content: { type: String, default: '' },
    author: { type: String, default: 'IVIPL Research Team' },
    views: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const MongoBlog = mongoose.model('Blog', blogSchema);

export const Blog = {
  find: async (filter = {}) => {
    if (isMongoActive()) {
      try {
        return await MongoBlog.find(filter).sort({ createdAt: -1 });
      } catch (err) {
        console.error('Mongo error in Blog.find:', err.message);
      }
    }
    const all = dbStore.getAll('blogs');
    return all.filter((item) => {
      let match = true;
      if (filter.category && filter.category !== 'All Blogs') {
        match = match && item.category?.toLowerCase() === filter.category.toLowerCase();
      }
      return match;
    });
  },

  findById: async (id) => {
    if (isMongoActive()) {
      try {
        const item = await MongoBlog.findById(id);
        if (item) return item;
      } catch (err) {
        // Fall back to local
      }
    }
    return dbStore.getById('blogs', id);
  },

  create: async (data) => {
    let mongoRecord = null;
    if (isMongoActive()) {
      try {
        mongoRecord = await MongoBlog.create(data);
      } catch (err) {
        console.error('Mongo error in Blog.create:', err.message);
      }
    }
    const localRecord = dbStore.insert('blogs', {
      ...data,
      _id: mongoRecord?._id || undefined
    });
    return mongoRecord || localRecord;
  },

  findByIdAndUpdate: async (id, updates) => {
    let mongoRecord = null;
    if (isMongoActive()) {
      try {
        mongoRecord = await MongoBlog.findByIdAndUpdate(id, updates, { new: true });
      } catch (err) {
        // Fall back to local
      }
    }
    const localRecord = dbStore.update('blogs', id, updates);
    return mongoRecord || localRecord;
  },

  findByIdAndDelete: async (id) => {
    if (isMongoActive()) {
      try {
        await MongoBlog.findByIdAndDelete(id);
      } catch (err) {
        // Ignore
      }
    }
    return dbStore.remove('blogs', id);
  }
};
