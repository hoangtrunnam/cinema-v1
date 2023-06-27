export interface IUserLogin {
  id: number;
  username: string;
  accessToken: string;
  refreshToken: string;
}

export interface IUserInfoDetails {
  id: number;
  name: string;
  image: any;
  address: string;
  phone: string;
  doB: string;
  sex: boolean;
  email: string;
}

export enum CookiesEnum {
  USER_INFO = "USER_INFO",
}
