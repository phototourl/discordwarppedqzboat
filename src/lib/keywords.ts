/**
 * 关键词词汇表
 * 用于 SEO 和内容管理
 */

export const keywords = {
  // 核心关键词
  primary: [
    "Discord Wrapped",
    "Discord Checkpoint",
    "Discord Analytics",
    "Discord Statistics",
    "Discord Year in Review",
    "Discord Data Analysis",
  ],
  
  // 功能关键词
  features: [
    "Discord Activity Tracker",
    "Discord Message Analytics",
    "Discord Server Statistics",
    "Discord Usage Insights",
    "Discord Data Export",
    "Discord Privacy",
    "Discord Local Processing",
  ],
  
  // 技术关键词
  technical: [
    "Discord API",
    "Discord Data Processing",
    "JSON Data Export",
    "Browser-based Analytics",
    "Client-side Processing",
    "Privacy-first Analytics",
    "Open Source Discord Tools",
  ],
  
  // 社区关键词
  community: [
    "Discord Community",
    "Discord Users",
    "Discord Servers",
    "Discord Gamers",
    "Discord Creators",
    "Discord Developers",
  ],
  
  // 未来扩展关键词
  future: [
    "Discord AI Analytics",
    "Discord Machine Learning",
    "Discord Predictive Analytics",
    "Discord Behavior Analysis",
    "Discord Engagement Metrics",
    "Discord Performance Dashboard",
    "Discord Custom Reports",
    "Discord API Integration",
    "Discord Bot Analytics",
    "Discord Channel Analytics",
  ],
  
  // 长尾关键词
  longTail: [
    "how to analyze discord data",
    "discord statistics tool",
    "discord wrapped alternative",
    "privacy-focused discord analytics",
    "local discord data processing",
    "discord year in review generator",
    "discord activity report",
    "discord message statistics",
    "discord server analytics tool",
  ],
};

export const getAllKeywords = (): string[] => {
  return [
    ...keywords.primary,
    ...keywords.features,
    ...keywords.technical,
    ...keywords.community,
    ...keywords.future,
    ...keywords.longTail,
  ];
};

export const getKeywordsForPage = (page: string): string[] => {
  const pageKeywords: Record<string, string[]> = {
    home: [...keywords.primary, ...keywords.features],
    blog: [...keywords.primary, ...keywords.community, ...keywords.longTail],
    docs: [...keywords.technical, ...keywords.features],
    faq: [...keywords.primary, ...keywords.features],
  };
  
  return pageKeywords[page] || keywords.primary;
};

