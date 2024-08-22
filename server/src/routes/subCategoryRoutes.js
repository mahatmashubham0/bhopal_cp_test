const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/SubCategoryController');

router.get('/', subcategoryController.getSubCategories);
router.post('/', subcategoryController.createSubCategory);
router.put('/:id', subcategoryController.updateSubCategory);
router.delete('/:id', subcategoryController.deleteSubCategory);

module.exports = router;
