import { selector } from "recoil";
import { userInfoState } from "./atom";

export const isUserLoggedInSelector = selector<boolean>({
  key: "isUserLoggedInSelector",
  get: ({ get }) => {
    const user = get(userInfoState);

    if (user && user?.username !== "") {
      return true;
    }

    return false;
  },
});
