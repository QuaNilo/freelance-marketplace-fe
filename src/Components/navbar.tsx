import React from 'react';

const Navbar = () => {
  return (
    <nav className="text-white border-b border-gray-600 py-4">
      <div className="container flex w-full justify-between items-center px-4">
        
        <div className="flex space-x-6">
          <a href="/" className="text-2xl font-semibold hover:text-gray-400">MyBrand</a>
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>
        
        <div className="flex-grow flex justify-center">
          <input 
            type="search" 
            placeholder="Search..." 
            className="w-full px-4 py-2 mx-8 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;