import { Blog } from '../models/Blog.js';

export const getBlogs = async (req, res) => {
  try {
    const { category, search } = req.query;
    let blogs = await Blog.find({ category });

    if (search) {
      const q = search.toLowerCase();
      blogs = blogs.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.description?.toLowerCase().includes(q) ||
          b.content?.toLowerCase().includes(q) ||
          b.category?.toLowerCase().includes(q)
      );
    }

    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    console.error('Error in getBlogs:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs.',
      error: error.message
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found.'
      });
    }

    // Optionally increment views
    const currentViews = blog.views || 0;
    await Blog.findByIdAndUpdate(id, { views: currentViews + 1 });

    return res.status(200).json({
      success: true,
      data: { ...blog, views: currentViews + 1 }
    });
  } catch (error) {
    console.error('Error in getBlogById:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch blog details.',
      error: error.message
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, category, date, image, description, content, author } = req.body;

    if (!title || !category || !description) {
      return res.status(400).json({
        success: false,
        message: 'Title, category, and description are required.'
      });
    }

    const newBlog = await Blog.create({
      title: title.trim(),
      category: category.trim(),
      date: date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      image: image || '',
      description: description.trim(),
      content: content || description.trim(),
      author: author || 'IVIPL Editorial Team',
      views: 0
    });

    return res.status(201).json({
      success: true,
      message: 'Blog created successfully.',
      data: newBlog
    });
  } catch (error) {
    console.error('Error in createBlog:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create blog.',
      error: error.message
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await Blog.findById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found.'
      });
    }

    const updated = await Blog.findByIdAndUpdate(id, req.body);

    return res.status(200).json({
      success: true,
      message: 'Blog updated successfully.',
      data: updated
    });
  } catch (error) {
    console.error('Error in updateBlog:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update blog.',
      error: error.message
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Blog deleted successfully.'
    });
  } catch (error) {
    console.error('Error in deleteBlog:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete blog.',
      error: error.message
    });
  }
};
