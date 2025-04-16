import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJobsMenuOpen, setIsJobsMenuOpen] = useState(false);
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isMessagesMenuOpen, setIsMessagesMenuOpen] = useState(false);

  const walletMenuRef = useRef<HTMLDivElement | null>(null);
  const walletButtonRef = useRef<HTMLButtonElement | null>(null);
  const jobsMenuRef = useRef<HTMLDivElement | null>(null);
  const jobsButtonRef = useRef<HTMLButtonElement | null>(null);
  const notificationsMenuRef = useRef<HTMLDivElement | null>(null);
  const notificationsButtonRef = useRef<SVGSVGElement | null>(null);
  const messagesMenuRef = useRef<HTMLDivElement | null>(null);
  const messagesButtonRef = useRef<SVGSVGElement | null>(null);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsJobsMenuOpen(false);
    setIsNotificationsMenuOpen(false);
    setIsMessagesMenuOpen(false);
  };
  
  const toggleMenu = () => {
    const willOpen = !isMenuOpen;
    closeAllMenus();
    setIsMenuOpen(willOpen);
  };
  
  const toggleJobsMenu = () => {
    const willOpen = !isJobsMenuOpen;
    closeAllMenus();
    setIsJobsMenuOpen(willOpen);
  };
  
  const toggleNotificationsMenu = () => {
    const willOpen = !isNotificationsMenuOpen;
    closeAllMenus();
    setIsNotificationsMenuOpen(willOpen);
  };
  
  const toggleMessagesMenu = () => {
    const willOpen = !isMessagesMenuOpen;
    closeAllMenus();
    setIsMessagesMenuOpen(willOpen);
  };  

  const handleClickOutside = (event: MouseEvent) => {
    if (
      walletMenuRef.current && !walletMenuRef.current.contains(event.target as Node) &&
      walletButtonRef.current && !walletButtonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }    
    
    if (
      jobsMenuRef.current && !jobsMenuRef.current.contains(event.target as Node) &&
      jobsButtonRef.current && !jobsButtonRef.current.contains(event.target as Node)
    ) {
      setIsJobsMenuOpen(false);
    }
  
    if (
      notificationsMenuRef.current && !notificationsMenuRef.current.contains(event.target as Node) &&
      notificationsButtonRef.current && !notificationsButtonRef.current.contains(event.target as Node)
    ) {
      setIsNotificationsMenuOpen(false);
    }

    if (
      messagesMenuRef.current && !messagesMenuRef.current.contains(event.target as Node) &&
      messagesButtonRef.current && !messagesButtonRef.current.contains(event.target as Node)
    ) {
      setIsMessagesMenuOpen(false);
    }    
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="text-white border-b border-gray-600 py-4">
        <div className="grid grid-cols-3 items-center px-4 gap-4 w-full">
          {/* Left links */}
          <div className="flex space-x-6 col-span-1 relative items-center">
            <a href="/" className="text-2xl font-semibold hover:text-gray-400">MyBrand</a>
            <a href="/about" className="hover:text-gray-400">About</a>

            {/* Jobs button */}
            <div className="relative">
              <button
                ref={jobsButtonRef}
                onClick={toggleJobsMenu}
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <span>Jobs</span>
                {/* Arrow icon changes based on the state of the jobs menu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-4 h-4 transform transition-transform ${isJobsMenuOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Jobs menu */}
              {isJobsMenuOpen && (
                <div
                  ref={jobsMenuRef}
                  className="absolute left-0 mt-9 w-[800px] bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-100 transition-opacity duration-200 z-10 p-4 grid grid-cols-4 gap-4"
                >
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Tech</h4>
                    <a href="/jobs/frontend" className="block px-2 py-1 bg-gray-800 rounded">Frontend Dev</a>
                    <a href="/jobs/backend" className="block px-2 py-1 bg-gray-800 rounded">Backend Dev</a>
                    <a href="/jobs/fullstack" className="block px-2 py-1 bg-gray-800 rounded">Fullstack</a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Design & Product</h4>
                    <a href="/jobs/uiux" className="block px-2 py-1 bg-gray-800 rounded">UI/UX Designer</a>
                    <a href="/jobs/product" className="block px-2 py-1 bg-gray-800 rounded">Product Manager</a>
                    <a href="/jobs/research" className="block px-2 py-1 bg-gray-800 rounded">UX Researcher</a>
                  </div>
                </div>
              )}
            </div>
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
            <svg ref={notificationsButtonRef} viewBox="0 0 24 24" width="18px" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleNotificationsMenu}>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> 
              </g>
            </svg>
            <svg ref={messagesButtonRef} viewBox="0 0 24 24" width="18px" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMessagesMenu}>
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
            <svg viewBox="0 0 24 24" width="18px" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
            <button 
              ref={walletButtonRef}
              onClick={toggleMenu}
              className="flex bg-primary hover:bg-blue-700 px-4 py-2 rounded-full transition-colors text-black"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon mr-3">
                <path d="M2.00488 8.99979H21.0049C21.5572 8.99979 22.0049 9.4475 22.0049 9.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V8.99979ZM3.00488 2.99979H18.0049V6.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM15.0049 13.9998V15.9998H18.0049V13.9998H15.0049Z"></path>
              </svg>
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Side menu to connect wallet */}
      {isMenuOpen && (
        <div ref={walletMenuRef} className="fixed top-0 right-0 w-96 h-full bg-gray-800 text-white shadow-lg p-6 z-50 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Connect wallet</h2>
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white text-2xl">&times;</button>
          </div>
          <ul className="space-y-4">
            <li>
              <button className="flex items-center justify-between w-full text-left hover:text-gray-400">
                <div className="flex items-center space-x-2">
                  <img className="w-16" src="/imgs/lace_logo.png" alt="Lace Logo" />
                  <span>Lace</span>
                </div>
                <span className="text-xl">{'>'}</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full text-left hover:text-gray-400">
                <div className="flex items-center space-x-5">
                  <img className="w-10 ml-3" src="/imgs/yoroi_logo.png" alt="Yoroi Logo" />
                  <span>Yoroi</span>
                </div>
                <span className="text-xl">{'>'}</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full text-left hover:text-gray-400">
                <div className="flex items-center space-x-2">
                  <img className="w-16" src="/imgs/exodus_logo.png" alt="Exodus Logo" />
                  <span>Exodus</span>
                </div>
                <span className="text-xl">{'>'}</span>
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Notifications menu */}
      {isNotificationsMenuOpen && (
        <div ref={notificationsMenuRef} className="absolute top-20 right-48 w-60 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg z-50 p-4">
          <h3 className="text-lg font-semibold mb-3">Notifications</h3>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">🔔 You have a new message</li>
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">📢 Product update available</li>
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">✅ Your subscription has been confirmed</li>
          </ul>
        </div>
      )}

      {isMessagesMenuOpen && (
        <div
          ref={messagesMenuRef}
          className="absolute top-20 right-24 w-72 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg z-50 p-4"
        >
          <h3 className="text-lg font-semibold mb-3">Messages</h3>
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">
              💬 João: "Hi, how are you?"
            </li>
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">
              💬 Ana: "I’d like to know more about..."
            </li>
            <li className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition">
              💬 Pedro: "I’ve sent the document!"
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;