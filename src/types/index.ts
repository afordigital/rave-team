export interface newsType {
  title: string;
  description: string;
  link: string;
  category: string;
  image: string;
  style?: "first-news" | "second-news" | "third-news" | "fourth-news";
}
