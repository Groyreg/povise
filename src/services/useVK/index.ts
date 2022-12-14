import { useEffect, useState } from 'react';
import timestampToDate from '@utils/timestampToDate';
import Cookies from 'universal-cookie';

import {
  IAuthResponse,
  IUserData,
  IUseVKData,
  IVideoRequest,
  TCallbackLogin,
  TCallbackSearchVideo,
  TCallbackUser,
} from './interfaces';

declare global {
  interface Window {
    VK: {
      Api: {
        call: (type: string, data: IUserData | IVideoRequest, callback: TCallbackUser | TCallbackSearchVideo) => void;
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

    setIsLoading(!authData);
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
    setIsLoading(true);

    init();
  };

  const handleAuth = (): void => {
    if (!isLoading) {
      return;
    }

    !isAuth() && auth(updateAuthData);
  };

  useEffect(handleInit, []);
  useEffect(handleAuth, [isLoading]);
  useEffect(updateState, [authData]);

  return {
    authData,
    isError,
    isLoading,
  };
};

export default useVK;
