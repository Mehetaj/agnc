export interface Blogs {
  id: number;
  image: string;
  title: string;
  content: string;
  status: string;
  author: string;
  publiched: string;
  category: string;
  tag: any;
}

export interface Service {
  logo: string;
  category: string;
  description: string;
  banner_description: string;
  banner_image: string;
  service_strategy: { title: string; description: string }[];
};
