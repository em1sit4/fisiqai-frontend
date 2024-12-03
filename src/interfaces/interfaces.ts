export interface IPathnameInfo {
  title: string;
  url: string;
  description: string;
}

export interface ITopic {
  id: number;
  title: string;
  name: string;
}

export interface IMarkdownContent {
  file: string;
  content: string;
}

export interface IQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface IFruta {
  name: string;
  quantity: number;
}
