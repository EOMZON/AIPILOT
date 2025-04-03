export interface Tool {
  id: string;
  name: string;
  description: string;
  tags: Tag[];
  category: string;
  subcategory: string;
  trustScore: TrustScore;
  metrics: Metrics;
  url: string;
  logo?: string;
}

export enum TagType {
  HEALTH = 'health', // 健康相关
  PRODUCTIVITY = 'productivity', // 效率/助手
  CERTIFICATION = 'certification', // 认证/权威
  ART = 'art', // 艺术/设计
  QUALITY = 'quality', // 高质量
  COLLABORATION = 'collaboration', // 协作
}

export interface TagColorConfig {
  bg: string;
  text: string;
  border: string;
}

// 统一的颜色配置
export const TAG_TYPE_COLORS: Record<TagType, TagColorConfig> = {
  [TagType.HEALTH]: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
  },
  [TagType.PRODUCTIVITY]: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  [TagType.CERTIFICATION]: {
    bg: 'bg-amber-100',
    text: 'text-amber-600',
    border: 'border-amber-200',
  },
  [TagType.ART]: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    border: 'border-purple-200',
  },
  [TagType.QUALITY]: {
    bg: 'bg-slate-100',
    text: 'text-slate-600',
    border: 'border-slate-200',
  },
  [TagType.COLLABORATION]: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
    border: 'border-orange-200',
  },
};

export interface Tag {
  name: string;
  type: TagType;
}

export interface TrustScore {
  ethics: number;
  privacy: number;
  security: number;
  reliability: number;
}

export interface Metrics {
  apiCost: string;
  responseTime: string;
  accuracy: string;
}
