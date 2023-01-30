import React, { ChangeEvent, ReactElement } from 'react';

import { IProps, ITab } from './interfaces';
import { ActivePart, Container, Tab, Wrapper } from './styles';

const Tabs = ({ tabs, onChange }: IProps): ReactElement => {
  const getActiveElementNumber = (): number => tabs.findIndex(({ isActive }: ITab): boolean => isActive);

  const updateActiveTab = (evt: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name },
    } = evt;

    const setNewState = (tab: ITab): ITab => {
      if (tab.key === name) {
        return { ...tab, isActive: true };
      }

      return { ...tab, isActive: false };
    };

    const newTabsState = tabs.map(setNewState);

    onChange(newTabsState);
  };

  const renderTab = ({ isActive, key, value, label }: ITab): ReactElement => (
    <Tab key={key} htmlFor={key} isActive={isActive} tabCount={tabs.length}>
      <input checked={isActive} id={key} name={key} onChange={updateActiveTab} type="radio" value={value} />
      <p>{label}</p>
    </Tab>
  );

  return (
    <Wrapper>
      <Container>
        {tabs.map(renderTab)}
        <ActivePart activeElement={getActiveElementNumber()} tabCount={tabs.length} />
      </Container>
    </Wrapper>
  );
};

export default Tabs;
