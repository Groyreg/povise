import React, { ReactElement, useContext, useMemo, useState } from 'react';
import { useTheme } from '@app/themes/context';
import DefaultAvatar from '@assets/images/default_avatar.jpg';
import Switch from '@components/Switch';
import { AppContext } from '@pages/Layout';

import { DEFAULT_USER_DATA } from './constants';
import { IUserData } from './interfaces';
import { Avatar, Block, Name, Wrapper } from './styles';

const Header = (): ReactElement => {
  const { toggle } = useTheme();
  const { authData } = useContext(AppContext);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const onSwitchChange = (value): void => {
    setIsDarkMode(value);
    toggle();
  };

  const setUserData = (): IUserData => {
    if (!authData) {
      return DEFAULT_USER_DATA;
    }

    const {
      session: {
        user: { photo_big: avatarURL, first_name: firstName, last_name: lastName },
      },
    } = authData;

    return { avatarURL, firstName, lastName };
  };

  const { avatarURL, firstName, lastName } = useMemo(setUserData, [authData]);

  return (
    <Wrapper>
      <Block>
        <Avatar src={avatarURL || DefaultAvatar} />
        <Name>
          {firstName}&nbsp;{lastName}
        </Name>
      </Block>
      <Switch checked={isDarkMode} checkedChildren="dark" onChange={onSwitchChange} unCheckedChildren="light" />
    </Wrapper>
  );
};

export default Header;
