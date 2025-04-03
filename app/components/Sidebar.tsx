'use client';

import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Palette,
  Heart,
  Zap,
  Home,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { categories } from '../data';

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  palette: Palette,
  heart: Heart,
  zap: Zap,
};

export default function Sidebar({
  selectedCategory,
  onSelectCategory,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-white shadow-lg h-screen p-4 transition-all duration-300 relative`}
    >
      {/* 折叠按钮 */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-white rounded-full p-1 shadow-md hover:bg-gray-50"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        )}
      </button>

      <h1
        className={`text-2xl font-bold mb-8 text-gray-900 ${
          isCollapsed ? 'hidden' : 'block'
        }`}
      >
        AI工具导航
      </h1>
      <nav>
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon] || Zap;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full flex items-center p-3 rounded-lg mb-2 transition-all ${
                selectedCategory === category.id
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              title={isCollapsed ? category.name : ''}
            >
              <IconComponent
                className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'} ${
                  selectedCategory === category.id
                    ? 'text-gray-900'
                    : 'text-gray-500'
                }`}
              />
              <span
                className={`font-medium ${isCollapsed ? 'hidden' : 'block'}`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
