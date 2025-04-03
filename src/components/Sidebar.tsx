import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Palette, Heart, Zap, Home } from 'lucide-react';
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
  return (
    <div className="w-64 bg-white shadow-lg h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">AI工具导航</h1>
      <nav>
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon] || Zap;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full flex items-center p-3 rounded-lg mb-2 transition-colors ${
                selectedCategory === category.id
                  ? `bg-${category.color}-100 text-${category.color}-600`
                  : 'hover:bg-gray-100'
              }`}
            >
              <IconComponent className="w-5 h-5 mr-3" />
              <span className="font-medium">{category.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
