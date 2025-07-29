import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  // Track current path for active state
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    
    // Listen for navigation changes (for client-side routing)
    const handlePopstate = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopstate);
    
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  const dropdownItems = [
    { name: 'CAISO Fundamentals', href: '/caiso-forecast' },
    { name: 'Goleta', href: '/goleta' },
  ];

  // Determine if we're on a Dayzer page (dropdown pages)
  const isDayzerActive = currentPath === '/caiso-forecast' || currentPath === '/goleta';
  const isLikedayActive = currentPath === '/likeday';
  const isMLActive = currentPath === '/ml';
  const isGOOPActive = currentPath === '/goop';

  return (
    <nav className="bg-white border-b border-gray-200 h-16">
      <div className="max-w-7xl mx-auto h-16 flex items-center px-4 sm:px-6 lg:px-8" style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}>
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="/">
            <img src="/logo.svg" alt="Dayzer" className="h-8 w-auto cursor-pointer" />
          </a>
        </div>
        
        {/* Navigation */}
        <div className="hidden sm:flex sm:ml-6 flex h-full space-x-8">
          {/* Likeday Tab - Now First */}
          <a
            href="/likeday"
            className={`h-full flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-150 border-b-2 ${
              isLikedayActive 
                ? 'border-indigo-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}
          >
            Likeday
          </a>

          {/* PCM Dropdown - Now Second */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`h-full flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-150 border-b-2 ${
                isDayzerActive 
                  ? 'border-indigo-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}
            >
              PCM
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-1">
                  {dropdownItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                      style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* ML Tab */}
          <a
            href="/ml"
            className={`h-full flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-150 border-b-2 ${
              isMLActive 
                ? 'border-indigo-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}
          >
            ML
          </a>

          {/* GOOP Tab */}
          <a
            href="/goop"
            className={`h-full flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-150 border-b-2 ${
              isGOOPActive 
                ? 'border-indigo-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}
          >
            GOOP
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 