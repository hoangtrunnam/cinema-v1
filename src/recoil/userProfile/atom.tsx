import { atom } from "recoil";

export interface IUserInfo {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  doB: string;
  sex: boolean;
  email: string;
  rankId: number;
  cusPoint: number;
}

export const userInfoProfileState = atom<IUserInfo>({
  key: "userInfoProfileState", // unique ID (with respect to other atoms/selectors)
  default: {
    id: -1,
    name: "",
    image: "",
    address: "",
    phone: "",
    doB: "",
    sex: false,
    email: "",
    rankId: -1,
    cusPoint: -1,
  },
});
