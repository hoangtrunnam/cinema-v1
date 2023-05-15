import { selector } from "recoil";
import { listAllFilmState } from "./atom";

export const isUserLoggedInSelector = selector<number>({
  key: "listAllFilmSelector",
  get: ({ get }) => {
    const listFilm = get(listAllFilmState);

    if (listFilm.length > 0) {
      return listFilm.length;
    }

    return 0;
  },
});
