export interface IVideoResponse {
  id: number;
  name: string;
  videos: Array<IVideosResponse>;
}

interface IVideosResponse {
  id: number;
  title: string;
  size: string;
  duration: string;
  last_modified: string;
}
