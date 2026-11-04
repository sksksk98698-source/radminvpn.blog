export interface AirportPackage {
  name: string;
  price: string;
  traffic: string;
  period: string;
  isPopular?: boolean;
}

export interface SpeedtestMetadata {
  file: string;
  testedAt: string;
  protocol: string;
  tool: string;
  avgLatency?: string;
  maxDownload?: string;
}

export interface AirportBrand {
  id: string; // url slug (e.g. 'guangsu', 'muguang')
  name: string;
  nameEn?: string;
  rank: number;
  isFeatured?: boolean; // Top 1 光速云
  affUrl: string;
  couponCode?: string;
  startingPrice: string;
  billingType: string;
  establishedYear: number | string;
  lineTypes: string[];
  protocols: string[];
  clientSupport: {
    customClient: boolean;
    thirdParty: boolean;
    description: string;
  };
  nodesSummary: string;
  coverageAreas: string[];
  packages: AirportPackage[];
  speedtest?: SpeedtestMetadata;
  unlockImages?: string[];
  streamingUnlock: {
    netflix: string;
    disney: string;
    chatgpt: string;
    tiktok: string;
    summary: string;
  };
  uniqueSellingPoint: string;
  pros: string[];
  cons: string[];
  targetAudience: string[];
  notSuitableFor: string[];
  comparisonDiff: string;
  summary: string;
  faq: { q: string; a: string }[];
  disclosureStatus: 'measured' | 'vendor' | 'review-required';
  lastVerifiedDate: string;
}
