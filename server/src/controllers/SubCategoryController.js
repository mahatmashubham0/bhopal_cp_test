const SubCategory = require('../models/subCategory');

// Get all sub-categories
exports.getSubCategories = async (req, res) => {
  try {
    // Extract query parameters
    let { page = 1, limit = 10, ...filters } = req.query;

    // Convert pagination parameters to integers
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    // Validate pagination parameters
    if (isNaN(pageNumber) || pageNumber < 1) {
      return res.status(400).json({ error: 'Invalid page number' });
    }
    if (isNaN(pageSize) || pageSize < 1) {
      return res.status(400).json({ error: 'Invalid limit' });
    }

    // Set the offset and limit for pagination
    const offset = (pageNumber - 1) * pageSize;
    limit = pageSize;

    // Find products with filters and pagination
    const products = await SubCategory.findAndCountAll({
      where: filters,
      offset,
      limit,
    });

    // Respond with paginated results
    res.json({
      total: products.count,
      page: pageNumber,
      limit: pageSize,
      data: products.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Create a sub-category
exports.createSubCategory = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    const subCategory = await SubCategory.create({ name, categoryId });
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a sub-category
exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, categoryId } = req.body;
    const [updated] = await SubCategory.update({ name, categoryId }, { where: { id } });
    if (updated) {
      const updatedSubCategory = await SubCategory.findByPk(id);
      res.json(updatedSubCategory);
    } else {
      res.status(404).json({ message: 'Sub-category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a sub-category
exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SubCategory.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Sub-category deleted' });
    } else {
      res.status(404).json({ message: 'Sub-category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
