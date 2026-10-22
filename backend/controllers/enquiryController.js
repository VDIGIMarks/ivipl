import { Enquiry } from '../models/Enquiry.js';

export const createEnquiry = async (req, res) => {
  try {
    const { name, phone, email, project, inquiryType, preferredTime, message, whatsappOptIn, source } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone number, and email address are required.'
      });
    }

    const enquiry = await Enquiry.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      project: project || 'General Portfolio',
      inquiryType: inquiryType || 'Site Visit',
      preferredTime: preferredTime || 'Anytime',
      message: message || '',
      whatsappOptIn: whatsappOptIn !== undefined ? whatsappOptIn : true,
      source: source || 'Website',
      status: 'new'
    });

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been received! An IVIPL advisor will reach out shortly.',
      data: enquiry
    });
  } catch (error) {
    console.error('Error in createEnquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again later.',
      error: error.message
    });
  }
};

export const getEnquiries = async (req, res) => {
  try {
    const { status, search, project } = req.query;
    let enquiries = await Enquiry.find();

    if (status) {
      enquiries = enquiries.filter((e) => e.status?.toLowerCase() === status.toLowerCase());
    }
    if (project) {
      enquiries = enquiries.filter((e) => e.project?.toLowerCase().includes(project.toLowerCase()));
    }
    if (search) {
      const q = search.toLowerCase();
      enquiries = enquiries.filter(
        (e) =>
          e.name?.toLowerCase().includes(q) ||
          e.email?.toLowerCase().includes(q) ||
          e.phone?.includes(q) ||
          e.project?.toLowerCase().includes(q)
      );
    }

    return res.json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    console.error('Error in getEnquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch enquiries.',
      error: error.message
    });
  }
};

export const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.'
      });
    }

    return res.json({
      success: true,
      data: enquiry
    });
  } catch (error) {
    console.error('Error in getEnquiryById:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch enquiry.',
      error: error.message
    });
  }
};

export const updateEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['new', 'contacted', 'scheduled', 'closed'];

    if (!allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${allowed.join(', ')}`
      });
    }

    const updated = await Enquiry.findByIdAndUpdate(req.params.id, { status });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.'
      });
    }

    return res.json({
      success: true,
      message: `Enquiry status updated to ${status}.`,
      data: updated
    });
  } catch (error) {
    console.error('Error in updateEnquiryStatus:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update enquiry status.',
      error: error.message
    });
  }
};

export const deleteEnquiry = async (req, res) => {
  try {
    const deleted = await Enquiry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found.'
      });
    }

    return res.json({
      success: true,
      message: 'Enquiry deleted successfully.'
    });
  } catch (error) {
    console.error('Error in deleteEnquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete enquiry.',
      error: error.message
    });
  }
};
