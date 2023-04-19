import { atom } from "recoil";

interface IUserInfo {
  username: string;
  accessToken: string;
  refreshToken: string;
}

export const userInfoState = atom<IUserInfo>({
  key: "userInfoState", // unique ID (with respect to other atoms/selectors)
  default: {
    username: "",
    accessToken: "",
    refreshToken: "",
  }, // default value (aka initial value)
});
