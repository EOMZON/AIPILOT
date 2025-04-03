'use client';

import { Tool, TAG_TYPE_COLORS } from '../types';
import { LineChart } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {tool?.logo ? (
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="w-8 h-8 rounded-lg object-contain"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">
                {tool.name.charAt(0)}
              </span>
            </div>
          )}
          <h3 className="text-xl font-semibold">{tool.name}</h3>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{tool.description}</p>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <LineChart className="w-4 h-4 text-blue-500" />
          <span className="text-sm">{tool.metrics.apiCost}</span>
        </div>
      </div>

      <div className="flex gap-2">
        {tool.tags.map((tag, index) => {
          const colorConfig = TAG_TYPE_COLORS[tag.type];
          return (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs font-medium 
                  ${colorConfig.bg} ${colorConfig.text} 
                  border ${colorConfig.border}`}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
