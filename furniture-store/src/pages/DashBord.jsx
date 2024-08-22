import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from '../utrils/api';

const AdminDashboard = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    // Fetch categories for dropdowns
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${server}/api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleProductSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${server}/api/products`, {
        name: productName,
        description: productDescription,
        price: productPrice,
        categoryId: selectedCategory
      });
      // Clear fields or handle success
      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setSelectedCategory('');
      console.log('Product created successfully');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleCategorySubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${server}/api/categories`, {
        name: categoryName
      });
      // Clear field or handle success
      setCategoryName('');
      console.log('Category created successfully');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleSubCategorySubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${server}/api/subcategories`, {
        name: subCategoryName,
        categoryId: selectedCategory
      });
      // Clear fields or handle success
      setSubCategoryName('');
      console.log('Subcategory created successfully');
    } catch (error) {
      console.error('Error creating subcategory:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <form onSubmit={handleProductSubmit} className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Create Product</h2>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">Product Description</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            id="productPrice"
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="productCategory"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700">Create Product</button>
      </form>

      <form onSubmit={handleCategorySubmit} className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Create Category</h2>
        <div className="mb-4">
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">Category Name</label>
          <input
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700">Create Category</button>
      </form>

      <form onSubmit={handleSubCategorySubmit}>
        <h2 className="text-xl font-semibold mb-2">Create Subcategory</h2>
        <div className="mb-4">
          <label htmlFor="subCategoryName" className="block text-sm font-medium text-gray-700">Subcategory Name</label>
          <input
            id="subCategoryName"
            type="text"
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategoryCategory" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="subCategoryCategory"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700">Create Subcategory</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
