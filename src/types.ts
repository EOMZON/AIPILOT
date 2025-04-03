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
}

export interface Tag {
  name: string;
  color: string;
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