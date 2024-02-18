export interface IVideo {
  id: number;
  createdAt: string;
  updatedAt: string;
  source: string;
  chapter: string;
  slug: string;
  title: string;
  overview: string;
  conversation: {
    id: string;
    createdAt: string;
    updatedAt: string;
    messages: string[];
  };
}

export type TypeVideoUpdate = Pick<IVideo, "id" | "createdAt">;
