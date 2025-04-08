import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="text-white border-b border-gray-600 py-4 bg-black">
        <div className="grid grid-cols-3 items-center px-4 gap-4 w-full">
          {/* Left links */}
          <div className="flex space-x-6 col-span-1">
            <a href="/" className="text-2xl font-semibold hover:text-gray-400">MyBrand</a>
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/about" className="hover:text-gray-400">About</a>
            <a href="/services" className="hover:text-gray-400">Services</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </div>

          {/* Center search */}
          <div className="col-span-1 flex justify-center">
            <input 
              type="search" 
              placeholder="Search..." 
              className="w-full max-w-md px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center justify-end space-x-6 col-span-1">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/about" className="hover:text-gray-400">About</a>
            <a href="/services" className="hover:text-gray-400">Services</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
            <button 
              onClick={toggleMenu}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Side menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg p-6 z-50 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Wallet Menu</h2>
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white text-2xl">&times;</button>
          </div>
          <ul className="space-y-4">
            <li><button className="w-full text-left hover:text-gray-400">MetaMask</button></li>
            <li><button className="w-full text-left hover:text-gray-400">WalletConnect</button></li>
            <li><button className="w-full text-left hover:text-gray-400">Coinbase Wallet</button></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
