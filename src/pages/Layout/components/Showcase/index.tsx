import React, { ReactElement, useEffect, useState } from 'react';
import { IVideo } from '@app/services/useVK/interfaces';
import Card from '@components/Card';
import { Empty, Spin } from 'antd';

import { IProps } from './interfaces';
import { Wrapper } from './styles';

const Showcase = ({ videoData, isVideoLoading }: IProps): ReactElement => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  console.log({ s: isVideoLoading, t: videoData });

  const updateVideos = (): void => {
    setVideos(videoData);
  };

  useEffect(updateVideos, [videoData]);

  const renderCard = (video: IVideo): ReactElement => <Card key={video.id} {...video} />;

  return (
    <Wrapper>
      {videos.length !== 0 && videos.map(renderCard)}
      {videos.length === 0 && !isVideoLoading && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      {isVideoLoading && <Spin size="large" tip="Loading" />}
    </Wrapper>
  );
};

export default Showcase;
