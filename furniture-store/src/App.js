import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./pages/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ProductDetailsPage} from "./components/ProductDetails";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./pages/DashBord";
// import './App.css';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
