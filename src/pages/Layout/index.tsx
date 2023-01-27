import React, { createContext, ReactElement, useEffect, useMemo, useState } from 'react';
import useVK from '@app/services/useVK';
import { IVideo, IVideoRequest } from '@app/services/useVK/interfaces';
import Showcase from '@pages/Layout/components/Showcase';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import Navbar from './components/Navbar';
import { DEFAULT_CONTEXT, to2k, to4k, toFullHD, toHD } from './constants';
import { IAppContext } from './interfaces';
import { Wrapper } from './styles';

export const AppContext = createContext<IAppContext>(DEFAULT_CONTEXT);

const Layout = (): ReactElement => {
  const { authData, isAuthLoading, videoData, searchVideos, isVideoLoading } = useVK();
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [is4k, setIs4k] = useState<boolean>(true);
  const [is2k, setIs2k] = useState<boolean>(true);
  const [isFullHD, setIsFullHD] = useState<boolean>(true);
  const [isHD, setIsHD] = useState<boolean>(true);

  const updateVideos = (): void => {
    const videosHD = isHD ? videoData.filter(toHD) : [];
    const videosFullHD = isFullHD ? videoData.filter(toFullHD) : [];
    const videos2k = is2k ? videoData.filter(to2k) : [];
    const videos4k = is4k ? videoData.filter(to4k) : [];

    const uniq = new Set([...videosHD, ...videosFullHD, ...videos2k, ...videos4k]);

    const byDuration = (
      { duration: durationOne, dateForCompare: dateForCompareOne }: IVideo,
      { duration: durationTwo, dateForCompare: dateForCompareTwo }: IVideo,
    ): number => {
      if (dateForCompareOne === dateForCompareTwo) {
        const dOne = parseInt(durationOne.toString().split(':').join(''), 10);
        const dTwo = parseInt(durationTwo.toString().split(':').join(''), 10);

        return dOne - dTwo;
      }

      if (dateForCompareOne > dateForCompareTwo) {
        return -1;
      }

      return 1;
    };

    const sortedVideos = [...Array.from(uniq)].slice().sort(byDuration);

    setVideos(sortedVideos);
  };

  const setContext = (): IAppContext => ({ authData, isAuthLoading });

  const contextData = useMemo(setContext, [authData, isAuthLoading]);

  const onChange = ({ target: { name, checked } }: CheckboxChangeEvent): void => {
    switch (name) {
      case 'isHD':
        setIsHD(checked);
        break;
      case 'isFullHD':
        setIsFullHD(checked);
        break;
      case 'is2k':
        setIs2k(checked);
        break;
      case 'is4k':
        setIs4k(checked);
        break;
      default:
    }
  };

  const handleSearchVideos = (params: IVideoRequest, isAllSearch: boolean): void => {
    setVideos([]);
    searchVideos(params, isAllSearch);
  };

  useEffect(updateVideos, [videoData, isHD, isFullHD, is2k, is4k]);

  return (
    <AppContext.Provider value={contextData}>
      <Wrapper>
        <Navbar
          is2k={is2k}
          is4k={is4k}
          isFullHD={isFullHD}
          isHD={isHD}
          onCheckboxChange={onChange}
          searchVideos={handleSearchVideos}
          videoData={videos}
        />
        <Showcase isVideoLoading={isVideoLoading} videoData={videos} />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default Layout;
