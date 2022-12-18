import { IVideoRequest } from '@app/services/useVK/interfaces';

export interface IForm {
  count: number;
  isAdult: boolean;
  longer: number;
  offset: number;
  search: string;
  shorter: number;
  sorting: number;
}

export interface IProps {
  searchVideos: (params: IVideoRequest) => void;
}
