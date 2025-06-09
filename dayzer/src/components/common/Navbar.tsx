import React from 'react';

const navLinks = [
  { name: 'Dayzer', href: '#', active: true },
];

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 h-16">
      <div className="max-w-7xl mx-auto h-16 flex items-center px-4 sm:px-6 lg:px-8" style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}>
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img src="/logo.svg" alt="Dayzer" className="h-8 w-auto" />
        </div>
        {/* Navigation */}
        <div className="hidden sm:flex sm:ml-6 flex h-full space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`h-full flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-150
                ${link.active
                  ? 'border-b-2 border-indigo-500 text-gray-900'
                  : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
              style={{ fontFamily: `'Inter', system-ui, -apple-system, sans-serif` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
} 