export interface Action<A, P> {
  type: A;
  payload: P;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface StoreState {
  searchTerm: string;
  apiData: {
    [id: number]: Image;
  };
}
