import { IVideo } from '@app/services/useVK/interfaces';

import { IAppContext } from './interfaces';

export const DEFAULT_CONTEXT: IAppContext = {
  authData: null,
  isAuthLoading: false,
};

export const to4k = ({ width, height }: IVideo): boolean => height === 2160 || width === 3840;
export const to2k = ({ width, height }: IVideo): boolean => height === 1440 || width === 2560;
export const toFullHD = ({ width, height }: IVideo): boolean => height === 1080 || width === 1920;
export const toHD = ({ width, height }: IVideo): boolean =>
  height === 720 || width === 1280 || height === 1280 || width === 720;
