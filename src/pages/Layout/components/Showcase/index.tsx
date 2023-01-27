import React, { ReactElement } from 'react';
import { IVideo } from '@app/services/useVK/interfaces';
import Card from '@components/Card';
import { Empty, Spin } from 'antd';

import { IProps } from './interfaces';
import { Wrapper } from './styles';

const Showcase = ({ videoData, isVideoLoading }: IProps): ReactElement => {
  const renderCard = (video: IVideo): ReactElement => <Card key={video.id + Math.random()} {...video} />;

  return (
    <Wrapper>
      {videoData.length !== 0 && videoData.map(renderCard)}
      {videoData.length === 0 && !isVideoLoading && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      {isVideoLoading && <Spin size="large" tip="Loading" />}
    </Wrapper>
  );
};

export default Showcase;
