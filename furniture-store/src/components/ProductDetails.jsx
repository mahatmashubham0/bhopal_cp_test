import React from 'react';
import { Link, useParams } from 'react-router-dom';
import all_product from '../utrils/data'; // Import your products data

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = all_product.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">Furniture Store</Link>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-blue-600">${product.new_price}</span>
              <span className="text-gray-500 line-through">${product.old_price}</span>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
