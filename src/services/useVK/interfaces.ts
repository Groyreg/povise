export interface IUseVKData {
  authData: IAuthResponse | null;
  isAuthLoading: boolean;
  isError: boolean;
  isVideoLoading: boolean;
  searchVideos: (params: IVideoRequest, isSearchAll: boolean) => void;
  videoData: IVideo[];
}

export interface IAuthResponse {
  session: IAuth;
  status: string;
}

export interface IAuth {
  expire: number;
  mid: string;
  secret: string;
  sid: string;
  sig: string;
  user: IUser;
}
export interface IUser {
  can_access_closed: boolean;
  domain: string;
  first_name: string;
  href: string;
  id: string;
  is_closed: boolean;
  last_name: string;
  nickname: string;
  photo_big: string;
}

export interface IUserData {
  fields: string;
  name_case: string;
  user_ids: string;
  v: string;
}
export interface IVideoRequest {
  adult: number;
  count: number;
  hd: number;
  live: number;
  longer?: number | string;
  offset: number;
  q: string;
  shorter?: number | string;
  sort: number;
  v: string;
}

export interface ISearchVideoResponse {
  response: {
    items: IVideo[];
  };
}

export interface IVideo {
  can_add: number;
  can_add_to_faves: number;
  can_comment: number;
  can_like: number;
  can_repost: number;
  can_subscribe: number;
  comments: number;
  date: number | string;
  dateForCompare: Date;
  description: string;
  duration: number | string;
  first_frame: IImageOfVideo[];
  height: number;
  id: number;
  image: IImageOfVideo[];
  likes: {
    count: number;
    user_likes: number;
  };
  owner_id: number;
  player: string;
  repeat: number;
  reposts: {
    count: number;
    user_reposted: number;
  };
  title: string;
  track_code: string;
  type: string;
  views: number;
  width: number;
}

interface IImageOfVideo {
  height: number;
  url: string;
  width: number;
  with_padding?: number;
}

export interface IUserResponse {
  response: IUser[];
}

export type TCallbackLogin = (data: IAuthResponse) => void;
export type TCallbackUser = (responseData: IUserResponse) => void;
export type TCallbackSearchVideo = (responseData: ISearchVideoResponse) => void;
