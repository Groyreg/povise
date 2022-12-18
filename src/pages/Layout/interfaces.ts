import { IAuthResponse } from '@app/services/useVK/interfaces';

export interface IAppContext {
  authData: IAuthResponse | null;
  isAuthLoading: boolean;
}
