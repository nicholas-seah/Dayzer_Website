import React, { useState } from 'react';

interface CalendarPickerProps {
  availableDates: string[];
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
  onClose: () => void;
}

export default function CalendarPicker({ 
  availableDates, 
  selectedDate, 
  onDateSelect, 
  onClose 
}: CalendarPickerProps) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    // Start with the month of the selected date or the first available date
    const dateToShow = selectedDate || availableDates[0];
    return dateToShow ? new Date(dateToShow) : new Date();
  });

  // Convert calendar date to DD-MonthName-YYYY format to match database format
  const formatDateForComparison = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Check if a calendar date is available (matches simulation_date)
  const isDateAvailable = (date: Date) => {
    const formattedDate = formatDateForComparison(date);
    return availableDates.includes(formattedDate);
  };

  // Check if a calendar date is selected
  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false;
    const formattedDate = formatDateForComparison(date);
    return selectedDate === formattedDate;
  };

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  // Handle date click
  const handleDateClick = (date: Date) => {
    if (isDateAvailable(date)) {
      const formattedDate = formatDateForComparison(date);
      onDateSelect(formattedDate);
      onClose();
    }
  };

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-sm font-medium text-gray-900">{monthName}</h3>
        <button
          onClick={goToNextMonth}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-xs text-gray-500 text-center py-2 font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {days.map((date, index) => {
          if (!date) {
            return <div key={index} className="p-2"></div>;
          }

          const available = isDateAvailable(date);
          const selected = isDateSelected(date);

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              disabled={!available}
              className={`
                p-2 text-sm rounded text-center transition-colors min-h-[32px]
                ${available 
                  ? selected
                    ? 'bg-blue-600 text-white font-medium shadow-md'
                    : 'bg-blue-50 border-2 border-blue-400 text-blue-800 hover:bg-blue-100 cursor-pointer font-bold'
                  : 'text-gray-300 cursor-not-allowed bg-gray-50'
                }
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          {availableDates.length} available dates
        </div>
        <button
          onClick={onClose}
          className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );
} 