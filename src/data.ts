import { Tool } from './types';

export const categories = [
  {
    id: 'design',
    name: '设计师工具',
    color: 'purple',
    icon: 'palette',
  },
  {
    id: 'health',
    name: '健康管理',
    color: 'green',
    icon: 'heart',
  },
  {
    id: 'productivity',
    name: '效率提升',
    color: 'blue',
    icon: 'zap',
  },
];

export const tools: Tool[] = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: '专业的AI图像生成工具，适合概念艺术和插画设计',
    tags: [
      { name: '图像生成', color: 'purple-600' },
      { name: '概念艺术', color: 'pink-600' },
      { name: '高质量', color: 'yellow-600' },
    ],
    category: 'design',
    subcategory: '图像生成',
    trustScore: {
      ethics: 85,
      privacy: 90,
      security: 88,
      reliability: 92,
    },
    metrics: {
      apiCost: '$0.01/image',
      responseTime: '10-30s',
      accuracy: '95%',
    },
    url: 'https://midjourney.com',
  },
  {
    id: 'ada-health',
    name: 'Ada Health',
    description: 'AI驱动的个人健康助手和症状检查工具',
    tags: [
      { name: '健康诊断', color: 'green-600' },
      { name: '个人助手', color: 'teal-600' },
      { name: 'FDA认证', color: 'emerald-600' },
    ],
    category: 'health',
    subcategory: '健康诊断',
    trustScore: {
      ethics: 95,
      privacy: 98,
      security: 96,
      reliability: 94,
    },
    metrics: {
      apiCost: 'Free',
      responseTime: '5-10s',
      accuracy: '93%',
    },
    url: 'https://ada.com',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: '智能文档助手，提升写作和组织效率',
    tags: [
      { name: '文档处理', color: 'blue-600' },
      { name: '写作助手', color: 'indigo-600' },
      { name: '团队协作', color: 'sky-600' },
    ],
    category: 'productivity',
    subcategory: '文档处理',
    trustScore: {
      ethics: 88,
      privacy: 92,
      security: 90,
      reliability: 89,
    },
    metrics: {
      apiCost: '$10/月',
      responseTime: '1-3s',
      accuracy: '90%',
    },
    url: 'https://notion.so',
  },
];