import React from 'react';
import { tools } from '../data';
import ToolCard from './ToolCard';

interface MainContentProps {
  selectedCategory: string;
}

export default function MainContent({ selectedCategory }: MainContentProps) {
  const filteredTools = tools.filter(tool => tool.category === selectedCategory);
  
  return (
    <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}