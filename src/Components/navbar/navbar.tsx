import React from 'react';

const Navbar = () => {
  return (
    <nav className="text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo or Brand */}
        <div>
          <a href="/" className="text-2xl font-semibold hover:text-gray-400">MyBrand</a>
        </div>
        
        {/* Search Bar */}
        <div>
          <input 
            type="search" 
            placeholder="Search..." 
            className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Menu Items */}
        <div className="space-x-6">
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
