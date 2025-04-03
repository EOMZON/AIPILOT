'use client';

import React, { useState, useMemo, useRef } from 'react';
import { tools } from '../data';
import ToolCard from './ToolCard';
import { Search } from 'lucide-react';
import { Tool } from '../types';

interface SearchSuggestions {
  tags: string[];
  tools: Tool[];
}

interface MainContentProps {
  selectedCategory: string;
}

export default function MainContent({ selectedCategory }: MainContentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmedSearch, setConfirmedSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 收集所有唯一的标签
  const allTags = Array.from(
    new Set(tools.flatMap((tool) => tool.tags.map((tag) => tag.name)))
  );

  // 搜索建议
  const searchSuggestions = useMemo<SearchSuggestions>(() => {
    if (!searchTerm || searchTerm.length < 1) return { tags: [], tools: [] };
    const lowerSearchTerm = searchTerm.toLowerCase();

    // 收集匹配的标签和工具名称
    const matchingTags = allTags.filter((tag) =>
      tag.toLowerCase().includes(lowerSearchTerm)
    );
    const matchingTools = tools
      .filter(
        (tool) =>
          tool.name.toLowerCase().includes(lowerSearchTerm) ||
          tool.description.toLowerCase().includes(lowerSearchTerm)
      )
      .slice(0, 3);

    return {
      tags: matchingTags.slice(0, 5),
      tools: matchingTools,
    };
  }, [searchTerm, allTags]);

  // 根据搜索词和标签筛选工具
  const filteredTools = useMemo(() => {
    let filtered =
      selectedCategory === 'home'
        ? tools
        : tools.filter((tool) => tool.category === selectedCategory);

    if (selectedTag) {
      filtered = filtered.filter((tool) =>
        tool.tags.some((tag) => tag.name === selectedTag)
      );
    }

    if (confirmedSearch) {
      const lowerSearchTerm = confirmedSearch.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(lowerSearchTerm) ||
          tool.description.toLowerCase().includes(lowerSearchTerm) ||
          tool.tags.some((tag) =>
            tag.name.toLowerCase().includes(lowerSearchTerm)
          )
      );
    }

    return filtered;
  }, [selectedCategory, confirmedSearch, selectedTag]);

  // 处理搜索建议点击
  const handleSuggestionClick = (suggestion: string, type: 'tag' | 'tool') => {
    if (type === 'tag') {
      setSelectedTag(suggestion);
      setSearchTerm('');
      setConfirmedSearch('');
    } else {
      setSearchTerm(suggestion);
      setConfirmedSearch(suggestion);
    }
    setIsSearching(false);
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  // 处理搜索提交
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmedSearch(searchTerm);
    setIsSearching(false);
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      {/* Hero Section with Search and Tags */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">探索AI工具的无限可能</h1>
            <p className="text-xl mb-8 text-gray-200">
              发现、尝试、创新 - 让AI助力您的工作与生活
            </p>

            {/* 搜索框 */}
            <form
              onSubmit={handleSearchSubmit}
              className="w-full max-w-2xl mx-auto relative mb-8"
            >
              <input
                ref={searchInputRef}
                type="text"
                placeholder="搜索AI工具..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsSearching(true);
                }}
                onFocus={() => setIsSearching(true)}
                className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm 
                  border border-white/20 text-white placeholder-gray-300
                  focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 
                  p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <Search className="w-5 h-5 text-gray-300" />
              </button>

              {/* 搜索建议下拉框 */}
              {isSearching && searchTerm && (
                <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                  {searchSuggestions.tags.length > 0 && (
                    <div className="p-2">
                      <div className="text-sm text-gray-500 px-3 py-1">
                        标签
                      </div>
                      {searchSuggestions.tags.map((tag, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSuggestionClick(tag, 'tag')}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  )}
                  {searchSuggestions.tools.length > 0 && (
                    <div className="p-2 border-t">
                      <div className="text-sm text-gray-500 px-3 py-1">
                        工具
                      </div>
                      {searchSuggestions.tools.map((tool, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() =>
                            handleSuggestionClick(tool.name, 'tool')
                          }
                          className="w-full text-left px-3 py-2 hover:bg-gray-100"
                        >
                          <div className="text-gray-700">{tool.name}</div>
                          <div className="text-sm text-gray-500 truncate">
                            {tool.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  {searchSuggestions.tags.length === 0 &&
                    searchSuggestions.tools.length === 0 && (
                      <div className="p-4 text-center text-gray-500">
                        未找到相关内容
                      </div>
                    )}
                </div>
              )}
            </form>

            {/* 热门标签 */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedTag(tag === selectedTag ? null : tag)
                  }
                  className={`px-4 py-2 rounded-full transition-colors text-sm font-medium
                    ${
                      tag === selectedTag
                        ? 'bg-white text-gray-900'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 工具瀑布流 */}
      <div className="p-8">
        {confirmedSearch && (
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            搜索结果: {filteredTools.length} 个工具
          </h2>
        )}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="break-inside-avoid mb-6">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
