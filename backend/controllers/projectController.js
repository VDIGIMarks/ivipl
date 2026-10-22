import { Project } from '../models/Project.js';

export const getProjects = async (req, res) => {
  try {
    const { type, location, featured, search } = req.query;
    let projects = await Project.find({ type, location });

    if (featured !== undefined) {
      const isFeatured = featured === 'true';
      projects = projects.filter((p) => Boolean(p.featured) === isFeatured);
    }

    if (search) {
      const q = search.toLowerCase();
      projects = projects.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q) ||
          p.location?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      );
    }

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Error in getProjects:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch projects.',
      error: error.message
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found.'
      });
    }

    return res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error in getProjectById:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch project details.',
      error: error.message
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const { title, subtitle, type, location, image, badge, badgeBg, description, features, highlights, featured } = req.body;

    if (!title || !type || !location) {
      return res.status(400).json({
        success: false,
        message: 'Title, type (residential or commercial), and location are required.'
      });
    }

    const newProject = await Project.create({
      title: title.trim(),
      subtitle: subtitle ? subtitle.trim() : '',
      type: type.toLowerCase(),
      location: location.trim(),
      image: image || '',
      badge: badge || '',
      badgeBg: badgeBg || '',
      description: description || '',
      features: Array.isArray(features) ? features : [],
      highlights: Array.isArray(highlights) ? highlights : [],
      featured: featured !== undefined ? featured : true,
      status: 'active'
    });

    return res.status(201).json({
      success: true,
      message: 'Project created successfully.',
      data: newProject
    });
  } catch (error) {
    console.error('Error in createProject:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create project.',
      error: error.message
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await Project.findById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Project not found.'
      });
    }

    const updated = await Project.findByIdAndUpdate(id, req.body);

    return res.status(200).json({
      success: true,
      message: 'Project updated successfully.',
      data: updated
    });
  } catch (error) {
    console.error('Error in updateProject:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update project.',
      error: error.message
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Project not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Project deleted successfully.'
    });
  } catch (error) {
    console.error('Error in deleteProject:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete project.',
      error: error.message
    });
  }
};
