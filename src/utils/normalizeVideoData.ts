import { IVideoRequest } from '@app/services/useVK/interfaces';
import { IForm } from '@pages/Layout/components/Navbar/interfaces';

export const normalizeSearchRequest = ({
  isAdult,
  count,
  offset,
  longer,
  shorter,
  search,
  sorting,
}: IForm): IVideoRequest => ({
  adult: isAdult ? 1 : 0,
  count,
  hd: 1,
  live: 0,
  longer: longer === 0 ? '' : longer * 60,
  offset,
  q: search,
  shorter: shorter === 0 ? '' : shorter * 60,
  sort: sorting,
  v: '5.131',
});
