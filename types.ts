
export interface NavItem {
  label: string;
  path: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  overview: string;
  challenge: string;
  solution: string;
  keyResults: string[];
  technologies: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceItem {
  title: string;
  points: string[];
}
