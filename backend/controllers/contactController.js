import { Contact } from '../models/Contact.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, propertyType, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone number are required.'
      });
    }

    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      propertyType: propertyType || 'residential_apartment',
      message: message ? message.trim() : ''
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you for contacting IVIPL! Our representative will be in touch shortly.',
      data: newContact
    });
  } catch (error) {
    console.error('Error in createContact:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit contact request.',
      error: error.message
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const { search, propertyType } = req.query;
    let contacts = await Contact.find();

    if (propertyType) {
      contacts = contacts.filter((c) => c.propertyType?.toLowerCase() === propertyType.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      contacts = contacts.filter(
        (c) =>
          c.name?.toLowerCase().includes(q) ||
          c.email?.toLowerCase().includes(q) ||
          c.phone?.includes(q) ||
          c.message?.toLowerCase().includes(q)
      );
    }

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error in getContacts:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve contact requests.',
      error: error.message
    });
  }
};

export const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact record not found.'
      });
    }

    return res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error in getContactById:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve contact record.',
      error: error.message
    });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Contact record not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Contact record deleted successfully.'
    });
  } catch (error) {
    console.error('Error in deleteContact:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete contact record.',
      error: error.message
    });
  }
};
