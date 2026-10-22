import { Subscriber } from '../models/Subscriber.js';

export const createSubscriber = async (req, res) => {
  try {
    const { email, phone, source } = req.body;

    if (!email && !phone) {
      return res.status(400).json({
        success: false,
        message: 'Either email address or phone number is required.'
      });
    }

    // Check if already subscribed
    const existing = await Subscriber.find();
    const alreadyExists = existing.some(
      (s) => (email && s.email?.toLowerCase() === email.trim().toLowerCase()) || (phone && s.phone === phone.trim())
    );

    if (alreadyExists) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to IVIPL market updates!'
      });
    }

    const newSubscriber = await Subscriber.create({
      email: email ? email.trim().toLowerCase() : '',
      phone: phone ? phone.trim() : '',
      source: source || 'Website Newsletter'
    });

    return res.status(201).json({
      success: true,
      message: 'Successfully subscribed to IVIPL market reports and project updates.',
      data: newSubscriber
    });
  } catch (error) {
    console.error('Error in createSubscriber:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to subscribe.',
      error: error.message
    });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    return res.status(200).json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    console.error('Error in getSubscribers:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve subscribers.',
      error: error.message
    });
  }
};

export const deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Subscriber.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Subscriber not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Unsubscribed successfully.'
    });
  } catch (error) {
    console.error('Error in deleteSubscriber:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete subscriber.',
      error: error.message
    });
  }
};
