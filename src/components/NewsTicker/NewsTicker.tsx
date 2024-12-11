import React from 'react';
import { useTickerAnimation } from './useTickerAnimation';
import { TickerItem } from './types';
import { Bell } from 'lucide-react';

interface NewsTickerProps {
  items: TickerItem[];
}

export const NewsTicker: React.FC<NewsTickerProps> = ({ items }) => {
  const { containerRef } = useTickerAnimation();

  return (
    <div className="bg-blue-50 border-y border-blue-100 overflow-hidden py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          <div className="flex items-center text-blue-600 mr-4">
            <Bell className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Duyurular:</span>
          </div>
          <div className="overflow-hidden relative flex-1">
            <div
              ref={containerRef}
              className="whitespace-nowrap inline-block animate-ticker"
            >
              {items.map((item, index) => (
                <span
                  key={index}
                  className="inline-block mr-8 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};