import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FeaturedProducts } from '../components/Feature';
import { server } from '../utrils/api';

const LandingPage = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
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


  useEffect(() => {
    if (true) { // re check it
      const fetchSubCategories = async () => {
        try {
          const response = await axios.get(`${server}/api/subcategories`, {
            // params: { name: selectedCategory }
          });
          console.log(response.data.data)
          setSubCategories(response.data.data);
        } catch (error) {
          console.error('Error fetching subcategories:', error);
        }
      };

      fetchSubCategories();
    } else {
      setSubCategories([]); 
    }
  }, [selectedCategory]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${server}/api/products`, {
          params: { category: selectedCategory, subCategory: selectedSubCategory }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedSubCategory]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Filters</h2>
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            {true && (
              <div className="mb-4">
                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
                <select
                  id="subcategory"
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                >
                  <option value="">Select a subcategory</option>
                  {subCategories.map((subCat) => (
                    <option key={subCat.id} value={subCat.id}>{subCat.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="w-full md:w-3/4">
            <FeaturedProducts products={products} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
