import React from 'react';
import { tools, categories } from '../data';
import ToolCard from './ToolCard';

interface MainContentProps {
  selectedCategory: string;
}

export default function MainContent({ selectedCategory }: MainContentProps) {
  const filteredTools =
    selectedCategory === 'home'
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  const categoryName =
    categories.find((cat) => cat.id === selectedCategory)?.name || '所有工具';

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">{categoryName}</h2>
        {selectedCategory === 'home' && (
          <p className="mt-2 text-gray-600">
            探索我们精选的AI工具集合，助力您的工作与创作
          </p>
        )}
      </div>

      {selectedCategory === 'home' ? (
        <div>
          {categories
            .filter((cat) => cat.id !== 'home')
            .map((category) => (
              <div key={category.id} className="mb-12">
                <h3
                  className={`text-xl font-semibold mb-4 text-${category.color}-600`}
                >
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tools
                    .filter((tool) => tool.category === category.id)
                    .map((tool) => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
