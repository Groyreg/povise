import React, { ReactElement } from 'react';
import { IVideo } from '@app/services/useVK/interfaces';

import { Circle, Container, Description, Link, Text, Wrapper } from './styles';

const Card = ({ image, date, title, duration, views, owner_id: ownerId, id }: IVideo): ReactElement => (
  <Link href={`https://vk.com/video${ownerId}_${id}`} rel="noreferrer" target="_blank">
    <Wrapper url={image[3]?.url}>
      <Description>
        <Container>
          <Circle color="accent" />
          <span>{date}</span>
        </Container>
        <span>time:&nbsp;{duration}</span>
        <span>{views}&nbsp;views</span>
      </Description>
      <Text>
        <span>{title}</span>
      </Text>
    </Wrapper>
  </Link>
);

export default Card;
