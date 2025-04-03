import React from 'react';
import { Tool } from '../types';
import { LineChart, Shield, Clock } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{tool.name}</h3>
        <div className="flex gap-2">
          {tool.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs font-medium bg-${tag.color}/10 text-${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{tool.description}</p>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <LineChart className="w-4 h-4 text-blue-500" />
          <span className="text-sm">{tool.metrics.apiCost}</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-500" />
          <span className="text-sm">{tool.trustScore.reliability}% 可靠性</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-500" />
          <span className="text-sm">{tool.metrics.responseTime}</span>
        </div>
      </div>
      
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        查看详情
      </a>
    </div>
  );
}