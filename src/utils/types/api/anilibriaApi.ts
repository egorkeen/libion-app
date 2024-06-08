export interface TitleParams {
  type: 'code' | 'id';
  title: string;
  filter?: string[];
  remove?: string[];
}

export interface ListOfTitlesParams {
  type: 'code' | 'id';
  titlesList: string[];
  filter?: string[];
  remove?: string[];
}

export interface SearchParams {
  query: string;
  year?: string;
  genres?: string[];
  filter?: string[];
  remove?: string[];
  limit?: number;
  pagination?: {
    page: number;
    pageSize: number;
  };
}
