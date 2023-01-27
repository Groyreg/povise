import { ITab } from '@components/Tabs/interfaces';

import { IForm } from './interfaces';

export const DEFAULT_FORM_VALUES: IForm = {
  count: 200,
  isAdult: true,
  longer: 12,
  offset: 0,
  search: '',
  shorter: 0,
  sorting: 0,
};

export const DEFAULT_TABS: ITab[] = [
  {
    isActive: true,
    key: 'tab_1',
    label: 'New',
    value: 0,
  },
  {
    isActive: false,
    key: 'tab_2',
    label: 'Popular',
    value: 2,
  },
  {
    isActive: false,
    key: 'tab_3',
    label: 'All',
    value: 3,
  },
];
