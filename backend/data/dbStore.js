import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = __dirname;

const getFilePath = (collection) => path.join(DATA_DIR, `${collection}.json`);

const ensureFile = (collection, defaultData = []) => {
  const filePath = getFilePath(collection);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2), 'utf-8');
  }
};

export const dbStore = {
  getAll: (collection) => {
    ensureFile(collection);
    try {
      const data = fs.readFileSync(getFilePath(collection), 'utf-8');
      return JSON.parse(data || '[]');
    } catch (err) {
      console.error(`Error reading ${collection}:`, err);
      return [];
    }
  },

  getById: (collection, id) => {
    const items = dbStore.getAll(collection);
    return items.find((item) => String(item.id) === String(id) || String(item._id) === String(id));
  },

  find: (collection, predicate) => {
    const items = dbStore.getAll(collection);
    return items.filter(predicate);
  },

  insert: (collection, item) => {
    const items = dbStore.getAll(collection);
    const newItem = {
      id: uuidv4(),
      _id: uuidv4(),
      ...item,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    items.unshift(newItem);
    fs.writeFileSync(getFilePath(collection), JSON.stringify(items, null, 2), 'utf-8');
    return newItem;
  },

  update: (collection, id, updates) => {
    const items = dbStore.getAll(collection);
    const index = items.findIndex((item) => String(item.id) === String(id) || String(item._id) === String(id));
    if (index === -1) return null;

    items[index] = {
      ...items[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    fs.writeFileSync(getFilePath(collection), JSON.stringify(items, null, 2), 'utf-8');
    return items[index];
  },

  remove: (collection, id) => {
    const items = dbStore.getAll(collection);
    const filtered = items.filter((item) => String(item.id) !== String(id) && String(item._id) !== String(id));
    if (filtered.length === items.length) return false;

    fs.writeFileSync(getFilePath(collection), JSON.stringify(filtered, null, 2), 'utf-8');
    return true;
  },

  count: (collection) => {
    return dbStore.getAll(collection).length;
  },

  seed: (collection, items, force = false) => {
    const existing = dbStore.getAll(collection);
    if (existing.length === 0 || force) {
      const formatted = items.map((item) => ({
        id: item.id ? String(item.id) : uuidv4(),
        _id: item.id ? String(item.id) : uuidv4(),
        ...item,
        createdAt: item.createdAt || new Date().toISOString(),
        updatedAt: item.updatedAt || new Date().toISOString()
      }));
      fs.writeFileSync(getFilePath(collection), JSON.stringify(formatted, null, 2), 'utf-8');
      return formatted.length;
    }
    return 0;
  }
};
