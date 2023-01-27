import React, { ReactElement, useState } from 'react';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import Tabs from '@components/Tabs';
import { ITab } from '@components/Tabs/interfaces';
import { normalizeSearchRequest } from '@utils/normalizeVideoData';
import { useFormik } from 'formik';

import Header from '../Header';

import { DEFAULT_FORM_VALUES, DEFAULT_TABS } from './constants';
import { IForm, IProps } from './interfaces';
import { Button, Checkboxes, Container, Divider, SearchForm, Text, Wrapper } from './styles';

const Navbar = ({ searchVideos, videoData, onCheckboxChange, is4k, isHD, isFullHD, is2k }: IProps): ReactElement => {
  const [tabs, setTabs] = useState<ITab[]>(DEFAULT_TABS);

  const onSubmit = (values: IForm): void => {
    const sorting = tabs.find(({ isActive }) => isActive)?.value || 0;

    const requestData: IForm = {
      ...values,
      sorting: sorting === 3 ? 0 : sorting,
    };

    searchVideos(normalizeSearchRequest(requestData), sorting === 3);
  };

  const onAllSearch = (): void => {
    const query = ['sex', 'anal', 'dp', 'analvids', 'сиськи'];
    // eslint-disable-next-line lint-local/no-inline-callbacks
    query.forEach((q: string) => {
      const request = {
        ...DEFAULT_FORM_VALUES,
        search: q,
      };

      searchVideos(normalizeSearchRequest(request as IForm), true);
    });
  };

  const form = {
    initialValues: DEFAULT_FORM_VALUES,
    onSubmit,
  };

  const {
    values: { search },
    // values: { search, isAdult, sorting, shorter, longer },
    handleChange,
    handleSubmit,
  } = useFormik(form);

  return (
    <Wrapper>
      <Container>
        <SearchForm onSubmit={handleSubmit}>
          <Header />
          <Tabs onChange={setTabs} tabs={tabs} />
          <Divider />
          <Input
            id="search"
            name="search"
            onChange={handleChange}
            placeholder="Search"
            style={{
              width: '100%',
            }}
            value={search}
          />
          <Button isFullWidth={true} onClick={onAllSearch}>
            Default search
          </Button>
        </SearchForm>
        <Text>Найдено: {videoData.length}</Text>
        <Checkboxes>
          <Checkbox checked={isHD} name="isHD" onChange={onCheckboxChange}>
            HD Видео
          </Checkbox>
          <Checkbox checked={isFullHD} name="isFullHD" onChange={onCheckboxChange}>
            FullHD Видео
          </Checkbox>
          <Checkbox checked={is2k} name="is2k" onChange={onCheckboxChange}>
            2k Видео
          </Checkbox>
          <Checkbox checked={is4k} name="is4k" onChange={onCheckboxChange}>
            4k Видео
          </Checkbox>
        </Checkboxes>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
