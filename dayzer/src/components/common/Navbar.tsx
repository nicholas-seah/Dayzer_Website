import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownItems = [
    { name: 'CAISO Fundamentals', href: '/caiso-forecast' },
    { name: 'Goleta', href: '/goleta' },
  ];

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
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="h-full flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-150 border-b-2 border-indigo-500 text-gray-900"
              style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}
            >
              Dayzer
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 