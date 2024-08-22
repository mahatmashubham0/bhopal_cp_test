import React from 'react';
import { Link } from 'react-router-dom';
import all_product from '../utrils/data'; // Import your products data

export const FeaturedProducts = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {all_product.slice(0, 8).map((product) => (
          <div key={product.id} className="border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
              <p className="text-lg font-semibold">{product.name}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-blue-600 font-bold">${product.new_price}</span>
                <span className="text-gray-500 line-through">${product.old_price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
