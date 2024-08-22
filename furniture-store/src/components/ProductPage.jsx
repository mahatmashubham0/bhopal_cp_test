import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Chairs', subCategories: ['Office Chairs', 'Dining Chairs'] },
  { name: 'Tables', subCategories: ['Dining Tables', 'Coffee Tables'] },
  { name: 'Sofas', subCategories: ['Sectional Sofas', 'Recliners'] },
];

export const ProductsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">Furniture Store</Link>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
              <h2 className="text-xl font-bold p-4 border-b border-gray-200">{category.name}</h2>
              <ul>
                {category.subCategories.map((subCategory) => (
                  <li key={subCategory} className="p-4 border-b border-gray-200">
                    <Link to={`/products/${category.name.toLowerCase()}/${subCategory.toLowerCase()}`} className="text-blue-600 hover:underline">
                      {subCategory}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
