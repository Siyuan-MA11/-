export interface ChartData {
  name: string;
  value: number;
  fill?: string;
}

export interface StageData {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

export interface InvestmentPoint {
  title: string;
  desc: string;
  tag: string;
}

export interface ContentSection {
  heading: string;
  text: string;
  bullets?: string[];
}

export interface ChapterDetail {
  id: string;
  title: string;
  color: string;
  sections: ContentSection[];
}