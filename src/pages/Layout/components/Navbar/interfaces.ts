import { IVideo, IVideoRequest } from '@app/services/useVK/interfaces';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

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
  is2k: boolean;
  is4k: boolean;
  isFullHD: boolean;
  isHD: boolean;
  onCheckboxChange: (event: CheckboxChangeEvent) => void;
  searchVideos: (params: IVideoRequest, isSearchAll: boolean) => void;
  videoData: IVideo[];
}

export interface INavBarStyles {
  isOpenedInMobile: boolean;
}
