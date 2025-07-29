import React from 'react';
import LikedayAnalysis from './common/LikedayAnalysis';

export default function LikedayPage() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900">Likeday Analysis</h1>
      
      {/* Main Analysis Component */}
      <LikedayAnalysis />
    </div>
  );
} 