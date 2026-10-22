import express from 'express';
import {
  createSubscriber,
  getSubscribers,
  deleteSubscriber
} from '../controllers/subscriberController.js';

const router = express.Router();

router.route('/')
  .post(createSubscriber)
  .get(getSubscribers);

router.route('/:id')
  .delete(deleteSubscriber);

export default router;
