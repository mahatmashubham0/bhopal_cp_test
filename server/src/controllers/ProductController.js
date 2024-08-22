const Product = require('../models/product');

// Get all products
export const getTasks = async (req, res) => {
  try {
    const { priority, status, page = 1, limit = 10 } = req.query;
    const query = {};

    if (priority) {
      query.priority = priority;
    }

    if (status) {
      query.status = status;
    }

    const tasks = await Task.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .exec();

    const totalTasks = await Task.countDocuments(query);
    const totalPages = Math.ceil(totalTasks / limit);

    res.json({
      tasks,
      totalPages,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, categoryId, subCategoryId } = req.body;
    const product = await Product.create({ name, price, categoryId, subCategoryId });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, categoryId, subCategoryId } = req.body;
    const [updated] = await Product.update({ name, price, categoryId, subCategoryId }, { where: { id } });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
