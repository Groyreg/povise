import { useEffect, useState } from 'react';
import timestampToDate from '@utils/timestampToDate';
import moment from 'moment';
import Cookies from 'universal-cookie';

import {
  IAuthResponse,
  ISearchVideoResponse,
  IUserData,
  IUseVKData,
  IVideo,
  IVideoRequest,
  TCallbackLogin,
  // TCallbackSearchVideo,
  // TCallbackUser,
} from './interfaces';

declare global {
  interface Window {
    VK: {
      Api: {
        // call: (type: string, data: IUserData | IVideoRequest, callback: TCallbackUser | TCallbackSearchVideo) => void;
        call: (type: string, data: IUserData | IVideoRequest, callback: any) => void;
      };
      Auth: {
        login: (callback: TCallbackLogin, type: number) => void;
      };
      init: (data: { apiId: number }) => void;
    };
  }
}

const useVK = (): IUseVKData => {
  const cookies = new Cookies();
  const cookieVKKey = 'vkSession';
  const authDataInitial = null;

  const [authData, setAuthData] = useState<IAuthResponse | null>(authDataInitial);
  const [videoData, setVideoData] = useState<IVideo[]>([]);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const isAuth = (): boolean => {
    const authDataFromCookie = cookies.get(cookieVKKey);

    if (!authDataFromCookie) {
      return false;
    }

    const {
      session: { expire },
    }: IAuthResponse = authDataFromCookie;

    const compareCondition = expire ? timestampToDate(expire) > new Date() : false;

    if (compareCondition) {
      setAuthData(authDataFromCookie);

      return true;
    }

    return false;
  };

  const updateAuthData = (data: IAuthResponse): void => {
    if (data?.session === null) {
      setIsError(true);

      return;
    }

    cookies.set(cookieVKKey, JSON.stringify(data));
    setAuthData(data);
  };

  const updateState = (): void => {
    if (authData === authDataInitial) {
      return;
    }

    setIsAuthLoading(!authData);
  };

  const init = (): void => {
    window.VK.init({
      apiId: 7475970,
    });
  };

  const auth = (callback: TCallbackLogin): void => {
    const accessToVideo = 16;
    window.VK.Auth.login(callback, accessToVideo);
  };

  const handleInit = (): void => {
    setIsAuthLoading(true);

    init();
  };

  const handleAuth = (): void => {
    if (!isAuthLoading) {
      return;
    }

    !isAuth() && auth(updateAuthData);
  };

  const formatVideoData =
    (params: IVideoRequest) =>
    ({ response: { items } }: ISearchVideoResponse) => {
      const notZeroDuration = ({ duration }: IVideo): boolean => duration !== '0:0';
      const formatVideo = (video: IVideo): IVideo => ({
        ...video,
        date: typeof video.date === 'number' ? moment(new Date(video.date * 1000).toString()).fromNow() : video.date,
        duration: `${Math.trunc(parseInt(video.duration.toString(), 10) / 60)}:${
          parseInt(video.duration.toString(), 10) % 60
        }`,
      });

      const formattedVideos = items.map(formatVideo).filter(notZeroDuration);
      const updatedVideo = (prevState: IVideo[]): IVideo[] => [...prevState, ...formattedVideos];

      setVideoData(updatedVideo);

      if (params.offset < 1000) {
        const newParams = { ...params, offset: params.offset + 200 };

        searchVideos(newParams);
      } else {
        setIsVideoLoading(false);
      }
    };

  const searchVideos = (params: IVideoRequest): void => {
    setIsVideoLoading(true);
    window.VK.Api.call('video.search', params, formatVideoData(params));
  };

  useEffect(handleInit, []);
  useEffect(handleAuth, [isAuthLoading]);
  useEffect(updateState, [authData]);
  console.log({ isVideoLoading, videoData });

  return {
    authData,
    isAuthLoading,
    isError,
    isVideoLoading,
    searchVideos,
    videoData,
  };
};

export default useVK;
